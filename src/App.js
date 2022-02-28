import { ChakraProvider } from "@chakra-ui/react";
import { LevelsProviders } from "./hooks/useLevels";
import { Drawer } from "./components/Drawer";
import { HStack, Flex, Text, IconButton } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar,";
import { FiMenu } from "react-icons/fi";

function App() {
  return (
    <ChakraProvider>
      <LevelsProviders>
        <div className="App">
          <Flex w="100%">
            <Sidebar />
            <Drawer />
          </Flex>
        </div>
      </LevelsProviders>
    </ChakraProvider>
  );
}

export default App;
