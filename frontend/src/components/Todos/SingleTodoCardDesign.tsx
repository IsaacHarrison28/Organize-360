import {
  Box,
  FormControl,
  FormLabel,
  Switch,
  Text,
  Icon,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import * as ReactDOM from "react-dom";
import { FaClipboardList } from "react-icons/fa";

export default function SingleTodoCard() {
  const [isCompletedState, changeIsCompletedState] = useState<boolean>(false);
  const [listOfTodos, changeListOfTodos] = useState<TodosObjectTemplate[]>([]);

  //interface for the ListOfTodos array for type annotation
  interface TodosObjectTemplate {
    id: number;
    title: string;
    description: string;
    status: string;
    createdOn: Date;
  }

  //fetch todos funtion
  function fetchTodos() {
    fetch("http://localhost:8080/todos", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        changeListOfTodos(data);
      });
  }

  //fetch all todos from database through the api
  useEffect(() => {
    fetchTodos();
  }, []);

  if (listOfTodos.length > 1) {
    const EmptyTodos = () => {
      return (
        <Box my={8} background="#F4F2FF" p={24} borderRadius="12">
          <Text
            sx={{
              fontFamily: "DM Sans",
              color: "#2B1887",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              rowGap: "1rem",
            }}
            fontSize="lg"
          >
            <Icon as={FaClipboardList} boxSize={50} color="#2B1887" />
            You do not have any todos.
          </Text>
        </Box>
      );
    };

    ReactDOM.render(<EmptyTodos />, document.getElementById("todos_container"));
  }

  console.log(listOfTodos);

  return (
    <Box
      id="todos_container"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
      mx={{ base: "-1" }}
    ></Box>
  );
}

//define the props types for the TodoCardTemplate component for better typescript functionalitu and type annotation
interface TodoCardTemplatePropTypes {
  // changeIsCompletedState: React.Dispatch<React.SetStateAction<boolean>>;
  isCompletedState: boolean;
  description: string;
  title: string;
}

const TodoCardTemplate: React.FC<TodoCardTemplatePropTypes> = ({
  isCompletedState,
  // changeIsCompletedState,
  title,
  description,
}) => {
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
          {title}
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
          {description}
        </Text>
      </Box>
      <Box my="4">
        <FormControl
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
        >
          <FormLabel htmlFor="isCompleted" mb="0">
            <Text fontSize={{ base: "md", lg: "1rem" }}>Completed?</Text>
          </FormLabel>
          <Switch
            id="isCompleted"
            isChecked={isCompletedState}
            onChange={() => {
              // changeIsCompletedState(!isCompletedState);
            }}
            colorScheme="green"
            size="md"
          />
        </FormControl>
      </Box>
    </Box>
  );
};
