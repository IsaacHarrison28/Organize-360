import { Box, Button, Text } from "@chakra-ui/react";
import { Clipboard } from "../../svg-icon-components/svgs";
import TodoHeadDisplay from "./TodoDisplayHeading";
import SingleTodoCard from "./SingleTodoCardDesign";

const TodosHome = () => {
  return (
    <Box
      sx={{
        margin: "auto",
        borderRadius: "16",
      }}
      w={{ base: "90vw", md: "70vw" }}
      maxW={{ md: "800px" }}
      bg="blue.200"
      py={{ base: "2", lg: "4" }}
      px={{ base: "5", lg: "10" }}
    >
      <TodoHeadDisplay />
      <SingleTodoCard />
    </Box>
  );
};

export default TodosHome;
