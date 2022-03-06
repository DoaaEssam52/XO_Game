import React from "react";
import { useHistory } from "react-router-dom";

function ChooseGrid() {
  let navigate = useHistory();

  /***************
    Init grids
  ***************/
  const handleClick = (gridLength) => {
    localStorage.setItem("grid", gridLength);
    navigate.push(`Game/${gridLength}`);
  };
  return (
    <div className="mx-auto">
      <h6 className="choose-grid_title">Choose a grid</h6>
      <div className="choose-grid__container">
        <p
          className="choose-grid__container__grid"
          onClick={() => {
            handleClick(3);
          }}
        >
          3 x 3
        </p>
        <p
          className="choose-grid__container__grid"
          onClick={() => {
            handleClick(5);
          }}
        >
          5 x 5
        </p>
      </div>
    </div>
  );
}

export default ChooseGrid;
