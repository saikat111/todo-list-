import React from 'react'

export default function TodsList({todo, onDelete}) {
    return (
        <div>
            <h4>{todo.title} </h4>
            <p>{todo.dis}</p>
            <button type="button"class="btn btn-dark" onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
    )
}
