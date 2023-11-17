import { Box, Image, VStack, Stack, Text } from "@chakra-ui/react";

const CardFamily = () => {
  return (
    <Box px={{ base: "4", md: "6" }} py="4" mb="4">
      <Stack
        spacing="4"
        direction={{ base: "column", sm: "row" }}
        justifyContent="center"
        alignItems="center"
      >
        <VStack spacing="4">
          <Box boxShadow="lg" p="2" rounded="lg" bg="white">
            <Image
              src="https://cldup.com/VPAtm7IdU4.png"
              alt="Dan Abramov"
              boxSize={{ base: "24" }}
              rounded="md"
            />
          </Box>
          <Text fontSize="xl" fontWeight="600">
            Colegio El Encuentro
          </Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default CardFamily;
