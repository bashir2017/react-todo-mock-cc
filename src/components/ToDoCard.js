import React from 'react'

const ToDoCard = (props) => {
    return (
    <div className="ui card">
        <div className="content">
          <div className="header">{props.todo.title}</div>
          {/* The button will require some conditional rendering. 
            If the button is under the Incomplete Container, button should be blue and text should say Complete
            If the button is under Complete Container, button should be orange and text should say Incomplete 
            */}
             
          <button onClick={() => props.todoHandler(props.todo.id)} className={props.todo.completed ? "ui button orange" : "ui button blue"}>{props.todo.completed ? "Incomplete" : "Complete"}</button>
          <button onClick={() => props.deleteTodo(props.todo.id)} className="ui button red">Delete</button>
        </div>
        
    </div>
    )
}

export default ToDoCard