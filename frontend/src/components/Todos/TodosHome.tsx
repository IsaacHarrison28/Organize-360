import { Box } from "@chakra-ui/react";
import TodoHeadDisplay from "./TodoDisplayHeading";
import SingleTodoCard from "./SingleTodoCardDesign";
import { useEffect } from "react";

const TodosHome = () => {
  useEffect(() => {
    console.log("site logging");
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
      <SingleTodoCard />
    </Box>
  );
};

export default TodosHome;
