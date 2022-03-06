import React, { useState, useEffect, useContext } from "react";
import Place from "./Place";
import { Current_Data_Context } from "../Contexts/ContextData";
import InitGrid from "./../Functions/InitGrid";
import { useHistory, useParams } from "react-router-dom";

function Game() {
  let navigate = useHistory();
  const { type } = useParams(); //grid length
  const currentState = useContext(Current_Data_Context).currentState;
  const usersName = useContext(Current_Data_Context).currentState.userName;
  const editState = useContext(Current_Data_Context).updateCurrentState;
  const playAgain = useContext(Current_Data_Context).playAgain;
  const [three_five] = useState(type == 3 ? "col-4" : "w-20");
  const [position, setPosition] = useState(null);
  let checkEnd = useContext(Current_Data_Context).endGame;
  const [gridData, setGrid] = useState(InitGrid(type));

  useEffect(() => {
    localStorage.setItem("grid", type);
    playAgain(type);
  }, []);

  const clickId = (id) => {
    setPosition(id);
  };

  const backTo = (url) => {
    navigate.push(url);
  };

  useEffect(() => {
    let newGrid = gridData;
    newGrid = gridData.map((place) => {
      return place.id == position
        ? {
            id: place.id,
            value: currentState.label,
          }
        : { ...place };
    });
    setGrid(newGrid);
    editState();
  }, [position]);

  return (
    <div>
      <h3 className={`players playersToggle`}>
        <span>{usersName}'s turn</span>
      </h3>
      <div className="row Grid">
        {gridData?.map((card) => {
          return (
            <div
              className={`${three_five} text-center`}
              key={Math.random() * 1000}
            >
              <Place id={card.id} clickPlace={clickId} value={card.value} />
            </div>
          );
        })}
      </div>
      {checkEnd?.length == type && (
        <div className={`game-result--show`}>
          <h6 className="game-result__title">{usersName} wins!!</h6>
        </div>
      )}
      <div className="d-flex justify-content-center">
        <button
          className="game-result__button my-3"
          onClick={() => {
            backTo("/Home");
          }}
        >
          Exit
        </button>
      </div>
    </div>
  );
}

export default Game;
