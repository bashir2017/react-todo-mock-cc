import SearchBarComponent from './SearchBarComponent'
import ToDoCard from './ToDoCard'
import React, { Component } from 'react';

export default class TodoContainer extends Component {

    // When implementing the search bar, consider implementing state here to make it dynamic. 
    // i.e everytime you type in the input field, the ToDos are immediately filtered
    
    state = {
        searchTerm: ""
    }

    // When implementing the search bar, consider implementing a function that handles setState and pass this function down to 
    // SearchBarComponent
  
    handleOnChange = (event) => {
      this.setState({
        searchTerm: event.target.value
      })
    }

    // When implementing the search term, consider implementing a function that FILTERs the todos.
    // To determine which to filter, find out which ToDo title INCLUDES the search term typed.

    renderCard = () => {
      //let filtered = [...this.props.todos]
       let filtered = this.props.todos.filter(item => item.title.toLowerCase().includes(this.state.searchTerm))
      //let todos = this.props.todos.map(todo => <ToDoCard deleteTodo={this.props.deleteTodo} todoHandler={this.props.todoHandler} key={todo.id} todo={todo} />)
      //let filtered = todos.filter(todo => todo.title.contains(this.status.searchTerm))
      return filtered.map(todo => <ToDoCard deleteTodo={this.props.deleteTodo} todoHandler={this.props.todoHandler} key={todo.id} todo={todo} />)
    }

  render() {
    return (
        <div>
            <h1>{this.props.finished ? "Completed Todos" : "Incomplete Todos"}</h1>
            {!this.props.finished && <SearchBarComponent handleOnChange={this.handleOnChange}/>}
            {/* <SearchBarComponent handleOnChange={this.handleOnChange}/> */}
            {/* Render ToDo Card for each ToDo */} 
            {/* Which Array method can you use? */}
            {this.renderCard()}
        </div>
    )
  }
}
