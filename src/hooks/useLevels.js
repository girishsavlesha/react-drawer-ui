import { createContext, useState } from "react";

export const UseLevelsContext = createContext({
  levels: [],
  addLevel: () => undefined,
  closeLevel: () => undefined,
});

export const LevelsProviders = ({ children }) => {
  const { levels, addLevel, closeLevel } = useLevels();
  return (
    <UseLevelsContext.Provider
      value={{
        levels,
        addLevel,
        closeLevel,
      }}
    >
      {children}
    </UseLevelsContext.Provider>
  );
};

function useLevels() {
  const [levels, setLevels] = useState([
    {
      depth: 0,
    },
  ]);

  const addLevel = () => {
    setLevels((prevLevels) => {
      const lastLevel = prevLevels[prevLevels.length - 1];
      return [
        ...prevLevels,
        {
          depth: lastLevel.depth + 1,
        },
      ];
    });
  };

  const closeLevel = () => {
    setLevels((prevLevels) => prevLevels.slice(0, prevLevels.length - 1));
  };

  return { levels, addLevel, closeLevel };
}
