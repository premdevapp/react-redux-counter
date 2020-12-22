const redux = require("redux");

const createStore = redux.createStore;

//dummy state
const initialState = {
  counter: 0,
};

//reducer

const rootReducer = (currState = initialState, action) => {
  if (action.type === "INC_COUNTER")
    return { ...currState, counter: currState.counter + 1 };
  if (action.type === "ADD_COUNTER")
    return {
      ...currState,
      counter: currState.counter + action.payload.value,
    };
  return currState;
};

//store

const store = createStore(rootReducer);

console.log("Initial", store.getState());

// subscription
store.subscribe(() => {
  console.log("subscription", store.getState());
});

//dispatching action

store.dispatch({ type: "INC_COUNTER" });
//console.log("increment", store.getState());
store.dispatch({ type: "ADD_COUNTER", payload: { value: 10 } });
//console.log("addition", store.getState());
//store.dispatch({type: 'INC_COUNTER'})
//store.dispatch({type: 'INC_COUNTER'})
