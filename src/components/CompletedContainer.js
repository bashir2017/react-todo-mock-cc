import React from 'react'
import ToDoCard from './ToDoCard'

const CompletedContainer = (props) => {
   const renderTodos = () => {
        return props.todos.map(todo => <ToDoCard deleteTodo={props.deleteTodo} todoHandler={props.todoHandler} key={todo.id} todo={todo}/>)
    }
    return (
        <div>
            <h1>Completed Todos</h1>
            {renderTodos()}
            {/* Render ToDo Card for each ToDo */}
             {/* Which Array method can you use? */}
        </div>
    )
}

export default CompletedContainer