import * as actionTypes from "../action";

const initialState = {
  result: [],
};

const reducer = (state = initialState, action) => {
  //
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        result: state.result.concat({
          id: new Date(),
          value: action.payload.result,
        }),
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
