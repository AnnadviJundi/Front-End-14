import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";

function Footer() {
  const bgColor = useColorModeValue("#7286D3", "gray.900");
  const textColor = useColorModeValue("#fff", "gray.300");

  return (
    <Box bg={bgColor} color={textColor} p="1rem" textAlign="center">
      <Flex direction="column" align="center">
        <Text fontSize="xl" mb="1rem">
          Movie
        </Text>
        <Text fontSize="md">Created by Annadvi Jundi</Text>
      </Flex>
    </Box>
  );
}

export default Footer;
