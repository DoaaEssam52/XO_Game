import React, { useState, useContext } from "react";
import { Current_Data_Context } from "../Contexts/ContextData";

function Place({ id = null, value = "", isHome = false, clickPlace }) {
  const addPlace = useContext(Current_Data_Context).addPlace;
  const endGame = useContext(Current_Data_Context).endGame;

  const winnedPlace = () => {
    return endGame?.find((elem) => {
      if (elem == id) {
        return true;
      }
    });
  };
  const [isWin] = useState(winnedPlace());

  return (
    <div>
      <button
        id={id}
        onClick={() => {
          clickPlace(id);
          addPlace({ id: id, value: value });
        }}
        disabled={endGame?.length > 0 || isHome}
        className={`Place ${value == "X" ? "secondColor" : "firstColor"} ${
          isWin ? "active" : ""
        } `}
      >
        {value}
      </button>
    </div>
  );
}

export default Place;
