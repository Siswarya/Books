import * as constants from "./Books.constants";

// export const getBooks = () => async dispatch => {
//   const response = await fetch(
//     "https://api.sheety.co/cb14b36e-1513-45fa-bdb0-8b35c4feaac8"
//   );
//   const data = await response.json();
//   dispatch({ type: constants.GET_BOOKS_SUCCESS, payload: data });
// };

export const getBooks = () => dispatch => {
  // var test = {
  //   method: "GET",
  //   headers: new Headers({
  //     "Content-type": "application/json",
  //     Accept: "application/json"
  //   }),
  //   credentials: "same-origin"
  // };
  fetch("https://api.sheety.co/cb14b36e-1513-45fa-bdb0-8b35c4feaac8")
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log("gfjhghfjkjk", data);
      dispatch({ type: constants.GET_BOOKS_SUCCESS, payload: data });
    });
};
