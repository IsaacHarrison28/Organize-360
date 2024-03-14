import { Box, FormControl, FormLabel, Switch, Text } from "@chakra-ui/react";
import TodoHeadDisplay from "./TodoDisplayHeading";
import { useEffect, useState } from "react";

const TodosHome = () => {
  //states
  const [listOfTodos, changeListOfTodos] = useState<TodoInterface[]>([]);

  //interfaces
  interface TodoInterface {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    createdOn: Date;
  }

  //functions
  function FetchTodos() {
    fetch("http://localhost:8080/todos", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        changeListOfTodos(data);
      });
  }

  useEffect(() => {
    FetchTodos();
  }, [listOfTodos]);

  return (
    <Box
      sx={{
        margin: "auto",
        borderRadius: "16",
      }}
      w={{ base: "98vw", md: "80vw" }}
      maxW={{ md: "800px" }}
      bg="blue.200"
      py={{ base: "2", lg: "4" }}
      px={{ base: "2", lg: "4" }}
    >
      <TodoHeadDisplay />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
        mx={{ base: "-1" }}
      >
        {listOfTodos.map((Todo) => {
          let Todo_id = Todo.id;

          return (
            <Box
              key={Todo.id}
              flex="1 0 calc(50% - 0.5rem)"
              m={{ base: "1" }}
              sx={{
                borderRadius: "12",
                background: "#F4F2FF",
              }}
              p={4}
            >
              <Box>
                <Text
                  fontSize={{ base: "md", lg: "20" }}
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "DM Sans",
                    textAlign: "left",
                    paddingInline: "1",
                  }}
                  marginBottom={{ base: "0.5rem", lg: "1rem" }}
                  lineHeight="1"
                  noOfLines={[1, 2]}
                >
                  {Todo.title}
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: "sm", lg: "0.99rem" }}
                  sx={{
                    fontFamily: "DM Sans",
                    textAlign: "left",
                  }}
                  lineHeight="1.2"
                  noOfLines={[2, 3]}
                >
                  {Todo.description}
                </Text>
              </Box>
              <Box my="4">
                <FormControl
                  display="flex"
                  alignItems="center"
                  justifyContent="flex-end"
                >
                  <FormLabel htmlFor="isCompleted" mb="0">
                    <Text fontSize={{ base: "md", lg: "1rem" }}>
                      Completed?
                    </Text>
                  </FormLabel>
                  <Switch
                    id="isCompleted"
                    onChange={() => {
                      const todo_url = `http://localhost:8080/todos/${Todo_id}`;

                      const new_data = { ...Todo, completed: !Todo.completed };

                      const options = {
                        method: "PATCH",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify(new_data),
                      };

                      fetch(todo_url, options)
                        .then((response) => {
                          if (!response.ok) {
                            throw new Error("Network response was not ok");
                          }
                          return response.json();
                        })
                        .then((updatedObject) => {
                          const objectIndex = listOfTodos.findIndex(
                            (object) => object.id === updatedObject.id
                          );
                          listOfTodos.splice(objectIndex, 1, updatedObject);
                          changeListOfTodos(listOfTodos);
                        })
                        .catch((error) => {
                          console.error("Error making PATCH request:", error);
                        });
                    }}
                    isChecked={Todo.completed}
                    colorScheme="green"
                    size="md"
                  />
                </FormControl>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default TodosHome;
