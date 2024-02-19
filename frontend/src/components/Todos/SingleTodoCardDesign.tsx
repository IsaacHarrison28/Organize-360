import { Box, Text } from "@chakra-ui/react";

export default function SingleTodoCard() {
  return (
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
            Make some books clean because mom needs them clean and I don't want
            to be the bad kid
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet hic
            eos libero suscipit dolorem incidunt itaque similique nostrum porro
            fugiat aspernatur minus quibusdam, nulla quia ipsum nemo
            voluptatibus labore error.
          </Text>
        </Box>
      </Box>

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
            Make some books clean because mom needs them clean and I don't want
            to be the bad kid
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet hic
            eos libero suscipit dolorem incidunt itaque similique nostrum porro
            fugiat aspernatur minus quibusdam, nulla quia ipsum nemo
            voluptatibus labore error.
          </Text>
        </Box>
      </Box>

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
            Make some books clean because mom needs them clean and I don't want
            to be the bad kid
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet hic
            eos libero suscipit dolorem incidunt itaque similique nostrum porro
            fugiat aspernatur minus quibusdam, nulla quia ipsum nemo
            voluptatibus labore error.
          </Text>
        </Box>
      </Box>

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
            Make some books clean because mom needs them clean and I don't want
            to be the bad kid
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet hic
            eos libero suscipit dolorem incidunt itaque similique nostrum porro
            fugiat aspernatur minus quibusdam, nulla quia ipsum nemo
            voluptatibus labore error.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}