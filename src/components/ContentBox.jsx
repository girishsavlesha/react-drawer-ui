import React, { useContext } from "react";
import { Box, Heading, Text, Stack, Button, VStack } from "@chakra-ui/react";
import { UseLevelsContext } from "./../hooks/useLevels";

export const ContentBox = ({ level }) => {
  const { addLevel, closeLevel } = useContext(UseLevelsContext);
  return (
    <Box p={40} fontSize={20} justifyContent="start">
      <VStack spacing={10} alignItems="start">
        <Heading>Drawer UI</Heading>
        <Text fontSize="2xl">
          This Code Snippet demonstrate the infinite drawer UI like we see on
          Google adsense, tagmanager etc.
        </Text>
        <Box>
          <Stack direction="row" spacing={4} align="center">
            <Button colorScheme="teal" variant="solid" onClick={addLevel}>
              Add
            </Button>
            {level.depth > 0 && (
              <Button colorScheme="teal" variant="outline" onClick={closeLevel}>
                Close
              </Button>
            )}
          </Stack>
        </Box>
      </VStack>
    </Box>
  );
};
