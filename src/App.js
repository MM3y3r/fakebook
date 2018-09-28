// @flow
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      todoList: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(result => result.json())
      .then(json => {
        this.setState({
          isLoading: false,
          todoList: json
        });
      });
  }

  render() {
    console.log(this.state.todoList);
    return (
      <div className="App">
        {this.state.isLoading ? (
          <div>we are loading...</div>
        ) : (
          this.state.todoList.map(listItem => {

          })
          <TodoListItem id={}
        )}
      </div>
    );
  }
}

export default App;
