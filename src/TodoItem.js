import React from "react";

class TodoItem extends React.Component {
  // Create a state with properties: id, text, completed.
  constructor() {
    super();
    this.state = {
      Id: 1,
      text: "My Task",
      completed: false
    };
  }

  render() {
    return (
      <div className="todo-item">
        <input type="checkbox" />
        <label>{this.state.text}</label>
      </div>
    );
  }
}

export default TodoItem;
