import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionTypes from "../../store/action";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl
          label="Add 10"
          clicked={() => this.props.onAddidingCounter(actionTypes.ADDING)}
        />
        <CounterControl
          label="Subtract 10"
          clicked={() =>
            this.props.onSubtractingCounter(actionTypes.SUBTRACTING)
          }
        />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
          Store Result
        </button>
        <ul>
          {this.props.storedResults.map((strResult) => (
            <li
              key={strResult.id}
              onClick={() => this.props.onDeleteResult(strResult.id)}
            >
              {strResult.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.result,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    onAddidingCounter: () =>
      dispatch({ type: actionTypes.ADDING, payload: { value: 10 } }),
    onSubtractingCounter: () =>
      dispatch({ type: actionTypes.SUBTRACTING, payload: { value: 10 } }),
    onStoreResult: (result) =>
      dispatch({ type: actionTypes.STORE_RESULT, payload: { result: result } }),
    onDeleteResult: (id) =>
      dispatch({
        type: actionTypes.DELETE_RESULT,
        payload: { resultElmId: id },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
