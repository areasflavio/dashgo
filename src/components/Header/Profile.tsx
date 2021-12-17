import { Flex, Box, Avatar, Text } from '@chakra-ui/react';

export function Profile(): JSX.Element {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Flávio Arêas</Text>
        <Text color="gray.300" fontSize="sm">
          areasflavio@unifei.edu.br
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Flávio Arêas"
        src="https://github.com/areasflavio.png"
      />
    </Flex>
  );
}
