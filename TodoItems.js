import React from 'react'

export const TodoItems = ({todoo,onDelete}) => {
  return (
    <div>
      <h5>{todoo.title}</h5>
      <p>{todoo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>onDelete(todoo)}>Delete</button>
    </div>
  )
}
