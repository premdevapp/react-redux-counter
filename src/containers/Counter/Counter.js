import React, { Component } from "react";
import { connect } from "react-redux";

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
          clicked={() => this.props.onAddidingCounter("ADDING")}
        />
        <CounterControl
          label="Subtract 10"
          clicked={() => this.props.onSubtractingCounter("SUBTRACTING")}
        />
        <hr />
        <button onClick={this.props.onStoreResult}>Store Result</button>
        <ul>
          {this.props.storedResults.map((strResult) => (
            <li key={strResult.id} onClick={this.props.onDeleteResult}>
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
    ctr: state.counter,
    storedResults: state.result,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
    onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
    onAddidingCounter: () =>
      dispatch({ type: "ADDING", payload: { value: 10 } }),
    onSubtractingCounter: () =>
      dispatch({ type: "SUBTRACTING", payload: { value: 10 } }),
    onStoreResult: () => dispatch({ type: "STORE_RESULT" }),
    onDeleteResult: () => dispatch({ type: "DELETE_RESULT" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
