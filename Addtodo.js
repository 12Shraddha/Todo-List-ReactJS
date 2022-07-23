import React, { useState } from 'react'

export const Addtodo = (props) => {
    let add_style={
        color: "green",
        fontWeight: "bold"}
    
    const [title, setTitle]=useState("");
    const [desc, setDesc]=useState("");
        
    const submit=(e)=>{
        // to prevent it from reloading
        e.preventDefault();
        if(!title|| !desc){
            alert("Title or description cannot be blank")
        }
        else {props.addtodo(title,desc);
            setTitle("");
            setDesc("");
        }} 

  return (
      <div className='container my-2'>
        <div style={add_style}>{props.title}</div>
          <form onSubmit={submit}>
              <div className="mb-3">
                  <label htmlFor="Title" className="form-label">Todo Title</label>
                  <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="Title" />
              </div>
              <div className="mb-3">
                  <label htmlFor='Desc' className="form-label">Todo Desc</label>
                  <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="Desc" />
              </div>
              <button type="submit" className="btn btn-sm btn-success">Add</button>
          </form>
      </div>
  )
}
