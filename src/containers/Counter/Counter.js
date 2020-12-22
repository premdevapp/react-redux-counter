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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
