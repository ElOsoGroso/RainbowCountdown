import React from "react";
import ReactDOM from "react-dom";


class Timer extends React.Component {
  render() {
    const componentStyle = {
      color: this.props.color,
      fontSize: '20vw'
    };
    return (
      <div>
        <h1 style={componentStyle}>{this.props.value}:{this.props.seconds}</h1>
      </div>
    );
  }
}

export default Timer;