import React, { PureComponent } from 'react';
import produce from 'immer';

const View = ({ value, onInc, onDec }) => (
  <div style={{ margin: '100px auto', width: '200px' }}>
    Counter: {value}
    <div>
      <button onClick={onInc}>+</button>
      <button onClick={onDec}>-</button>
    </div>
  </div>
);

export default class Counter extends PureComponent {
  state = { value: 0 };

  render() {
    return (
      <div>
        <h3>Container/presentation split</h3>

        <View
          value={this.state.value}
          onInc={this.handleInc}
          onDec={this.handleDec}
        />

        <h3>immer</h3>

        <View
          value={this.state.value}
          onInc={() =>
            this.setState(
              produce(x => {
                x.value++;
              })
            )
          }
          onDec={() =>
            this.setState(
              produce(x => {
                x.value--;
              })
            )
          }
        />

        <h3>Internal</h3>

        <div style={{ margin: ' 100px auto', width: '200px' }}>
          Counter: {this.state.value}
          <div>
            <button onClick={this.handleInc}>+</button>
            <button onClick={this.handleDec}>-</button>
          </div>
        </div>
      </div>
    );
  }

  handleInc = () => this.setState(({ value }) => ({ value: value + 1 }));
  handleDec = () => this.setState(({ value }) => ({ value: value - 1 }));
}
