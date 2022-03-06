export default function ValidateUsers(user) {
  let { user1, user2 } = user;
  let errors = { error1: null, error2: null, error3: null };
  var userNameTest = /^[a-zA-Z]+$/;
  if (!user1) {
    errors = { ...errors, error1: "Player 1 name is required." };
  } else if (!user1.match(userNameTest)) {
    errors = {
      ...errors,
      error1: "Only alphabet characters",
    };
  } else if (user1 == user2) {
    errors = { ...errors, error3: "Players' names should be different." };
  }
  if (!user2) {
    errors = { ...errors, error2: "Player 2 name is required." };
  } else if (!user2.match(userNameTest)) {
    errors = {
      ...errors,
      error2: "Only alphabet characters",
    };
  }
  return errors;
}