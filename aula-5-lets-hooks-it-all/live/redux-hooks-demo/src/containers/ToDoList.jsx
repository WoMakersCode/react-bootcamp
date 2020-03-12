import React from 'react'
import { useSelector } from 'react-redux'

const ToDoList = () => {
  const todoList = useSelector(state => state.toDoList)
  return(
    <ul>
      {todoList.length > 0 && todoList.map(todo => (
        <li key={todo}>{todo}</li>
      ))}
      {todoList === 0 && (<h3>nenhum item na lista</h3>)}
    </ul>
  )
}

export default ToDoList