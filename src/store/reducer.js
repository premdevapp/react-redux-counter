import * as actionTypes from "./action";

const initialState = {
  counter: 0,
  result: [],
};

const reducer = (state = initialState, action) => {
  //
  switch (action.type) {
    case actionTypes.INCREMENT:
      /*  const newState = Object.assign({}, state);
        newState.counter=  state.counter + 1 ;
      return newState; */
      return { ...state, counter: state.counter + 1 };

    case actionTypes.DECREMENT:
      return { ...state, counter: state.counter - 1 };

    case actionTypes.ADDING:
      return {
        ...state,
        counter: state.counter + action.payload.value,
      };

    case actionTypes.SUBTRACTING:
      return {
        ...state,
        counter: state.counter - action.payload.value,
      };

    case actionTypes.STORE_RESULT:
      return {
        ...state,
        result: state.result.concat({ id: new Date(), value: state.counter }),
      };
    case actionTypes.DELETE_RESULT:
      const updatedArray = state.result.filter(
        (result) => result.id !== action.payload.resultElmId
      );

      return {
        ...state,
        result: updatedArray,
      };

    default:
      return state;
  }
  //
};

export default reducer;
