import React from 'react';
import './App.css';
import Header from './components/Header'
import ToDoContainer from './components/ToDoContainer'


class App extends React.Component{

  state = {
    todos: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/todos')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        todos: data
      })
    })
  }

  todoHandler = (id) => {
    let updatedObject;

    let todos = this.state.todos.map(todo => {
      if(todo.id === id){
        // todo.completed = !todo.completed
        // updatedObject = todo;
        return {...todo, completed: !todo.completed}
      }
      return todo 
    })
    this.setState({
      todos: todos
    })

    //patch request 
    fetch(`http://localhost:3000/todos/${id} `, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify(updatedObject)
    }).then(res => res.json())
    .then(console.log)
  
  }


  newTodoHandler = (task) => {
    fetch('http://localhost:3000/todos', {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify({title: task, completed: false})
    }).then(res => res.json())
    .then(data => {
      this.setState({
        todos: [data, ...this.state.todos]
      })
    })
  }

  deleteTodo = (id) => {
    //delete request 
    fetch(`http://localhost:3000/todos/${id} `, {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      }
    }).then(res => res.json())
    .then(rep => {
      let filtered = this.state.todos.filter(todo => todo.id != id)
      this.setState({
        todos: filtered
      })
    })
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <ToDoContainer deleteTodo={this.deleteTodo} newTodoHandler={this.newTodoHandler} todoHandler={this.todoHandler} todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
