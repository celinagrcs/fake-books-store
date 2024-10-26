import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";


const GameContext = createContext();

export const useGame = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const [progress, setProgress] = useState(0);
  const [bugsFound, setBugsFound] = useState(0); 

  const incrementProgress = () => {
    if (bugsFound < 10) {
      setBugsFound(bugsFound + 1);
      setProgress((bugsFound + 1) * 10);
    }
  };

  return (
    <GameContext.Provider value={{ progress, incrementProgress }}>
      {children}
    </GameContext.Provider>
  );
}

GameProvider.propTypes = {
  children: PropTypes.node.isRequired, 
};
