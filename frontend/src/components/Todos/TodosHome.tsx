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
    status: string;
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
  }, []);

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
          let completedTodoStatus = false;
          let Todo_id = Todo.id;

          if (Todo.status === "completed") {
            completedTodoStatus = true;
          }

          return (
            <Box
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

                      let new_status = "pending";

                      if (completedTodoStatus === false) {
                        new_status = "completed";
                      }

                      const new_data = { ...Todo, status: new_status };

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
                        .then((data) => {
                          completedTodoStatus = !completedTodoStatus;
                        })
                        .catch((error) => {
                          console.error("Error making PATCH request:", error);
                        });
                    }}
                    isChecked={completedTodoStatus}
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
