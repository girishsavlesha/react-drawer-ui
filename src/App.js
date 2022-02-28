import { ChakraProvider } from "@chakra-ui/react";
import { LevelsProviders } from "./hooks/useLevels";
import { Drawer } from "./components/Drawer";
import { Flex } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar,";

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
