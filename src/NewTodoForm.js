import React, { Component } from "react";
import "./NewTodoForm.css";
import uuid from "uuid";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.createTodo({ ...this.state, id: uuid(), completed: false });
    this.setState({ task: "" });
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <label htmlFor="task">New Todo</label>
        <input
          type="text"
          placeholder="New Todo"
          id="task"
          value={this.state.task}
          onChange={this.handleChange}
          name="task"
        />
        <button>Add todo</button>
      </form>
    );
  }
}

export default NewTodoForm;
