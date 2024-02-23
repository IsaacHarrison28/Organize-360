import { Box, Text } from "@chakra-ui/react";
import { Clipboard } from "../../svg-icon-components/svgs";
import { AddIcon } from "@chakra-ui/icons";

export default function TodoHeadDisplay() {
  return (
    <Box
      sx={{
        display: "flex",
        flexAlign: "center",
        justifyContent: "space-between",
      }}
      my={{ base: "5", lg: "10" }}
      px={{ base: "8", lg: "16" }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          columnGap: "1rem",
        }}
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
      <Box
        sx={{
          background: "#F4F2FF",
          borderRadius: "50%",
        }}
        px={{ base: "3.5", lg: "2" }}
        py={{ base: "3", lg: "2" }}
      >
        <AddIcon
          color="black"
          fontSize={{ base: "larger", lg: "x-large" }}
          sx={{ borderRadius: "50%" }}
        />
      </Box>
    </Box>
  );
}
