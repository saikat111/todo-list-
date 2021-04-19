import React from 'react'
import TodsList from '../components/TodsList.js'; 

export default function Todo(props) {
    return (
        <div className ="container">
              <h4 className="text-center">Todo List </h4>

            {props.tods.map((todo) =>{
                return <TodsList todo ={todo} onDelete ={props.onDelete}/>
            })}

          
        </div>
    )
}
