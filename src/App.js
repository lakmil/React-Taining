import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    name: '',
    todolist: [],
    disabled: true,
  }

  onAddText = (e) => {
    this.setState({
      name: e.target.value,
    })
  }

  onAddInList = () => {
    if(this.state.name) {
      this.setState(prevState => ({
        todolist: prevState.todolist.concat(prevState.name),
        name: '',
        disabled: 'false'
      }));
    }
  }

  onRemoveName = (index) => {
    this.state.todolist.splice(index,1);
    this.setState(prevState => ({
      todolist: prevState.todolist
    }));
  }

  render() {
    return (
      <div className=" App todo">
      <h1>To Do List</h1>
        <input className="input" type="text" value={this.state.name} onChange={this.onAddText}  />
        <button className="button" onClick={this.onAddInList} disabled={!this.state.disabled}>Add</button>
        <ul className="list">
          {
            this.state.todolist.filter(item => item.includes(this.state.name)).map((item, index) => {
              return <li className="list-name" key = {index}>
                <span>{item}</span>
                <button className="button remove" onClick = {() => this.onRemoveName(index)}>Delete</button>
              </li>;
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;