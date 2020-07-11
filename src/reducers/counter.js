const counter = (state = 0, action) => {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "SUBSTRACT":
      return state - 1;
    case "GET_DATA":
      console.log(action.payload.description.id)
      return state
    default:
      return state;
  }
};
export default counter;
