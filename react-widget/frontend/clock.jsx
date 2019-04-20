import React from "react";

export default class Clock extends React.Component{
  constructor (){
    super();
    this.state = {date: new Date()};

    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  componentDidMount(){
    this.id = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.id);
  }

  render() {
    let d = this.state.date;
    return (
      <aside className="widget clock">
        <h1>Clock Widget</h1>
        <ul>
          <li>
            <span>Time:</span>{" "}
            <span>
              {d.getHours()}:{d.getMinutes()}:{d.getSeconds()} PDT
            </span>
          </li>
          <li>
            <span>Date:</span> <span>{this.state.date.toDateString()}</span>
          </li>
        </ul>
      </aside>
    );
  }
}
