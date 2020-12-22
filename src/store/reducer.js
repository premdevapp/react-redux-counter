const initialState = {
  counter: 0,
  result: [],
};

const reducer = (state = initialState, action) => {
  //
  switch (action.type) {
    case "INCREMENT":
      /*  const newState = Object.assign({}, state);
        newState.counter=  state.counter + 1 ;
      return newState; */
      return { ...state, counter: state.counter + 1 };

    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };

    case "ADDING":
      return {
        ...state,
        counter: state.counter + action.payload.value,
      };

    case "SUBTRACTING":
      return {
        ...state,
        counter: state.counter - action.payload.value,
      };

    case "STORE_RESULT":
      return {
        ...state,
        result: state.result.concat({ id: new Date(), value: state.counter }),
      };
    case "DELETE_RESULT":

    default:
      return state;
  }
  //
};

export default reducer;
