const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  //
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };

    case "DECREMENT":
      return { counter: state.counter - 1 };

    case "ADDING":
      return {
        counter: state.counter + action.payload.value,
      };

    case "SUBTRACTING":
      return {
        counter: state.counter - action.payload.value,
      };

    default:
      return state;
  }
  //
};

export default reducer;
