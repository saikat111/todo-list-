import React from 'react'

const title = (props) =>{
   return (
       <div>
        <p>My name is {props.name} my  Age is {Math.floor(Math.random()  * 30)}</p>
        <p>{props.children}</p>
       </div>
   
   )
   
}
export default title;