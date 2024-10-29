import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";


const GameContext = createContext();

export const useGame = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const [progress, setProgress] = useState(0);
  const [bugsFound, setBugsFound] = useState(new Set()); 

  const incrementProgress = (bugId) => {
    if (!bugsFound.has(bugId)) {
      setProgress((prev) => prev + 10);
      setBugsFound((prev) => new Set(prev).add(bugId))
    }
  };

  const totalBugsFound = bugsFound.size;

  return (
    <GameContext.Provider value={{ progress, incrementProgress, totalBugsFound }}>
      {children}
    </GameContext.Provider>
  );
}

GameProvider.propTypes = {
  children: PropTypes.node.isRequired, 
};
