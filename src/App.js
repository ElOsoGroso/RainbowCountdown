import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TimerInput from './components/TimerInput'; 
import Timer from './components/Timer'; 
import StartButton from './components/StartButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: '00',
      value: '',
      isClicked : false,
      color: 'black'
    }
    this.secondsRemaining = null;
    this.intervalHandle= null;
    this.handleChange = this.handleChange.bind(this);
    this.startCountDown = this.startCountDown.bind(this);
    this.tick = this.tick.bind(this);
  }
  getRandomColor(){
    var colors = ['green','purple','red','blue']
    return colors[Math.floor(Math.random()*colors.length)];
  }
  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  tick() {
    var min = Math.floor(this.secondsRemaining / 60);
    var sec = this.secondsRemaining - (min * 60);
    var audio = new Audio('beep')
    var audio2 = new Audio('grunt')
    audio2.play();
    this.setState({
      value: min,
      seconds: sec,
    })

    if (sec < 10) {
      this.setState({
        seconds: "0" + this.state.seconds,
        color: this.getRandomColor()
      })

    }

    if (min < 10) {
      this.setState({
        value: "0" + min,
      })

    }

    if (min === 0 & sec === 0) {
      audio2.play()
      clearInterval(this.intervalHandle);
    }


    this.secondsRemaining--
  }

  startCountDown() {
    this.intervalHandle = setInterval(this.tick, 1000);
    this.secondsRemaining = this.state.value;
    this.setState({
      isClicked : true
    })
  }

  render() {
    const clicked = this.state.isClicked;
    if(clicked){
    return (
      <div>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <Timer value={this.state.value} seconds={this.state.seconds} color = {this.state.color}/>
          </div>
        </div>
      </div>
    );
    }else{
      return (
        <div>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <TimerInput value={this.state.value} handleChange={this.handleChange} />
              <StartButton startCountDown={this.startCountDown} value={this.state.value} />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
