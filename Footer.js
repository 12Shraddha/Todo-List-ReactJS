import React from 'react'

export const Footer = () => {
  let footerstyle={
    position:"sticky",
    width:"100%"
  }
  
  return (
    <footer className="bg-dark text-light py-3" style={footerstyle}>
      <p className="text-center">
      Copyright &copy; MyTodosList.com
      </p>
    </footer>
  )
}
