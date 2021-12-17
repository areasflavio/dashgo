import { Flex, Box, Avatar, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps): JSX.Element {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Flávio Arêas</Text>
          <Text color="gray.300" fontSize="sm">
            areasflavio@unifei.edu.br
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Flávio Arêas"
        src="https://github.com/areasflavio.png"
      />
    </Flex>
  );
}
