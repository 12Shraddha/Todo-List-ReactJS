import React from 'react'
import {TodoItems} from "./TodoItems";


export const Todos = (props) => {
  let myStyle={
    minHeight: "70vh",
    
  }
  return (
    <div className="container my-3" style={myStyle}>
      <h3 className="text-center">Todos List</h3> 
      {props.t.length===0?"No Todos to display":
      props.t.map((i) => {
        return (<><p></p><TodoItems todoo={i} key={i.sno} onDelete={props.onDelete}/><hr></hr></>)
        })
      }
    </div>
  )
}

