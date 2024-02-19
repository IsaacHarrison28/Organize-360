import { Box, Text } from "@chakra-ui/react";
import { Clipboard } from "../../svg-icon-components/svgs";

export default function TodoHeadDisplay() {
  return (
    <Box
      sx={{
        display: "flex",
        flexAlign: "center",
        columnGap: "1rem",
      }}
      my={{ base: "5", lg: "10" }}
    >
      <Box>
        <Clipboard />
      </Box>
      <Text
        sx={{
          alignSelf: "flex-end",
          fontWeight: "bold",
          color: "#2B1887",
          fontFamily: "DM Sans",
        }}
        fontSize={{ base: "lg", lg: "1.5rem" }}
      >
        To-Do
      </Text>
    </Box>
  );
}
