import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      task: { text: "" },
      tasks: [],
    };
  }

  handleChange = (e) => {
    // console.log("click");
    this.setState({
      task: {
        text: e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { text: "" },
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="taskInput">Enter Task</label>
          <input
            type="text"
            id="taskInput"
            onChange={this.handleChange}
            // value={this.task.text}
          ></input>
          <button type="submit">Add Task</button>
        </form>
      </div>
    );
  }
}

export default App;
