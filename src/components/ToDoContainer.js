import React, { Component } from 'react';
import CompletedContainer from './CompletedContainer'
import IncompleteContainer from './IncompleteContainer'
import NewToDoForm from './NewToDoForm'

export default class ToDoContainer extends Component {

  // state = {
  //   completedTasks: [],
  //   inCompletedTasks: []
  // }
  
  // componeDidMount(){
  //   let completedTasks = this.props.todos.filter(todo => todo.completed);
  //   let inCompletedTasks = this.props.todos.filter(todo => !todo.completed);

  //   this.setState({
  //     completedTasks: completedTasks,
  //     inCompletedTasks: inCompletedTasks
  //   })
  // }
   todoHandler = (id) => {
     console.log(this.props.todos)
      this.props.todoHandler(id)
   }

   newTodoHandler = (task) => {
    this.props.newTodoHandler(task)
   }

   deleteTodo = (id) => {
     this.props.deleteTodo(id)
   }

  render() {

    //console.log(this.props.todos)
    let completedTasks = this.props.todos.filter(todo => todo.completed);
    let inCompletedTasks = this.props.todos.filter(todo => !todo.completed);
    
    return (
      <div id="todo-container">
        <NewToDoForm newTodoHandler={this.newTodoHandler}/>
        <CompletedContainer deleteTodo={this.deleteTodo} todoHandler={this.todoHandler} todos={completedTasks}/>
        <IncompleteContainer deleteTodo={this.deleteTodo} todoHandler={this.todoHandler} todos={inCompletedTasks}/>
      </div>
    );
  }
}
