import React, { useState, useEffect, createContext } from "react";
import ValidateAnySize from "./../Functions/ValidateAnySize";
import InitGrid from "./../Functions/InitGrid";

export const Current_Data_Context = createContext();
function ContextDataProvider(props) {
  const toggleLabel = () => {
    return currentState.label == "X" ? "O" : "X";
  };
  const [currentState, setCurrentState] = useState({
    label: "",
    count: 0,
    userName: "",
  });
  const updateCurrentState = () => {
    setCurrentState({
      label: toggleLabel(),
      count: currentState.count + 1,
      userName: toggleUser(),
    });
  };
  const toggleUser = () => {
    return currentState.label == "X"
      ? localStorage.getItem("user1")
      : localStorage.getItem("user2");
  };
  const [gameGrid, updateGrid] = useState(InitGrid(3));
  const [endGame, setEndGame] = useState([]);
  const addPlace = (place) => {
    const newArr = gameGrid.map((obj, index) => {
      if (index == place.id - 1) {
        return { id: place.id, value: currentState.label };
      }
      return obj;
    });
    updateGrid(newArr);
  };
  const playAgain = () => {
    let size = parseInt(localStorage.getItem("grid"));
    updateGrid(InitGrid(size));
    setCurrentState({
      label: "",
      count: 0,
      userName: "",
    });
    setEndGame([]);
  };
  useEffect(() => {
    let indexes = ValidateAnySize(gameGrid);
    setEndGame(indexes);
  }, [gameGrid]);
  return (
    <Current_Data_Context.Provider
      value={{
        currentState,
        updateCurrentState,
        addPlace,
        playAgain,
        gameGrid,
        endGame,
      }}
    >
      {props.children}
    </Current_Data_Context.Provider>
  );
}
export default ContextDataProvider;
