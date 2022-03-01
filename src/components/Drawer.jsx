import React from "react";
import { ContentBox } from "./ContentBox";
import { UseLevelsContext } from "../hooks/useLevels";

import { useContext } from "react";
import { Box } from "@chakra-ui/react";

export const Drawer = () => {
  const { levels } = useContext(UseLevelsContext);

  return (
    <Box flex={1} position="relative">
      {levels.map((level) => (
        <Box key={level.depth}>
          <Box
            position="absolute"
            top="0"
            right="0"
            bottom="0"
            background="#fff"
            minH="100vh"
            style={{
              zIndex: level.depth || undefined,
              left: level.depth && (700 / levels.length) * level.depth,
              boxShadow: level.depth ? "0 0 20px 0 rgba(0,0,0,0.2)" : "none",
            }}
          >
            <ContentBox level={level} />
            {level.depth !== levels.length - 1 ? (
              <Box
                position="absolute"
                top="0"
                right="0"
                bottom="0"
                w={"full"}
                h={"full"}
                style={{
                  zIndex: level.depth,
                  opacity: 0.1,
                }}
              ></Box>
            ) : null}
          </Box>
        </Box>
      ))}
    </Box>
  );
};
