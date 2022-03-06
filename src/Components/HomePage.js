import React, { useState } from "react";
import ValidateUsers from "./../Functions/ValidateUsers";
import i1 from "../Images/tic-tac-toe.jpg";
import ChooseGrid from "./ChooseGrid";

function HomePage() {
  const [isForm, setToggle] = useState(true);
  const [users, setUsers] = useState({});
  const emptyErrors = () => {
    return {};
  };
  const [errorsText, setErrors] = useState({
    error1: "",
    error2: "",
    error3: "",
  });
  const updateUsersNames = (e) => {
    e.preventDefault();
    let errors = ValidateUsers(users);
    if (!errors.error1 && !errors.error2 && !errors.error3) {
      setToggle(0);
      localStorage.setItem("user1", users.user1);
      localStorage.setItem("user2", users.user2);
    } else {
      setErrors({
        error1: errors.error1,
        error2: errors.error2,
        error3: errors.error3,
      });
    }
  };
  return (
    <div className="HomePage">
      <div>
        <div className="text-center">
          <img src={i1} />
        </div>
        <>
          {isForm ? (
            <div className="flex-center">
              <form onSubmit={updateUsersNames}>
                <div className="user">
                  <label className="secondColor">Player 1 : </label>
                  <div>
                    <input
                      name="player1"
                      type="text"
                      placeholder="Type your name"
                      onChange={(e) => {
                        setUsers({ ...users, user1: e.target.value });
                        setErrors(emptyErrors());
                      }}
                    />
                    {errorsText.error1 && <small>{errorsText.error1}</small>}
                  </div>
                </div>
                <div className="user">
                  <label className="secondColor">Player 2 : </label>
                  <div>
                    <input
                      name="player"
                      type="text"
                      placeholder="Type your name"
                      onChange={(e) => {
                        setUsers({ ...users, user2: e.target.value });
                        setErrors(emptyErrors());
                      }}
                    />
                    {errorsText.error2 && <small>{errorsText.error2}</small>}
                    {errorsText.error3 && <small>{errorsText.error3}</small>}
                  </div>
                </div>
                <div className="flex-center">
                  <button type="submit" className="btn">
                    Continue
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <ChooseGrid />
          )}
        </>
      </div>
    </div>
  );
}

export default HomePage;
