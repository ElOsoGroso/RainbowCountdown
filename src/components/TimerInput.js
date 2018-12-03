import React from "react";
import ReactDOM from "react-dom";


class TimerInput extends React.Component {
  render() {
    return ( 
      <div style={{marginLeft:100}}>
        <h3>Input your desired time</h3>
        <input type="number" value={this.props.value} onChange={this.props.handleChange} required />
      </div>
    );
  }
}

class Timer extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{ fontSize: 100, marginLeft:100 }}>{this.props.value}:{this.props.seconds}</h1>
      </div>
    );
  }
}

class StartButton extends React.Component {
  render() {
    return (
      <div style={{ marginLeft: 130 }}>
        <button className="btn btn-lg btn-success" disabled={!this.props.value} onClick={this.props.startCountDown}>Start</button>
      </div>

    );
  }
}
 export default TimerInput;