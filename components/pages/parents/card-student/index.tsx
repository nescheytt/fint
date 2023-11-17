import { Avatar, Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";

const CardStudent = () => {
  return (
    <Box
      bg="bg-surface"
      px={{ base: "4", md: "6" }}
      py="5"
      mb="3"
      boxShadow={useColorModeValue("sm", "sm-dark")}
      borderRadius="md"
    >
      <Stack spacing="4" justifyContent="center" alignItems="center">
        <Avatar
          src="https://tinyurl.com/yhkm2ek8"
          name="Valentino Flores"
          boxSize={{ base: "95" }}
        />

        <Text color="gray.900" fontSize="xl" fontWeight="600">
          Valentino
        </Text>
      </Stack>
    </Box>
  );
};

export default CardStudent;
