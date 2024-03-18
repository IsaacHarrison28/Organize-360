import { useState } from "react";
import "./styles/DatePickerCustomStyles.css";
import {
  Box,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Clipboard } from "../../svg-icon-components/svgs";
import { AddIcon, CalendarIcon } from "@chakra-ui/icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function TodoHeadDisplay() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<Date>(new Date());

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

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
        onClick={handleOpen}
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
          onClick={handleOpen}
        />
      </Box>

      {/*This is the portion for the modal for adding a new Todo */}
      <Modal isOpen={isModalOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            fontSize={{ base: "large", lg: "x-large" }}
            sx={{
              textAlign: "center",
              fontFamily: "DM Sans",
              fontWeight: "bold",
            }}
          >
            Add New Todo
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <Input
                sx={{
                  fontFamily: "DM Sans",
                }}
                variant="filled"
                placeholder="Todo Title"
              />
              <Input
                sx={{
                  fontFamily: "DM Sans",
                }}
                variant="filled"
                placeholder="Todo Description (Optional)"
              />
              <DatePicker
                showIcon
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
                icon={<CalendarIcon />}
              />
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleClose}>
              Close
            </Button>
            {/* Additional action buttons can be added here */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
