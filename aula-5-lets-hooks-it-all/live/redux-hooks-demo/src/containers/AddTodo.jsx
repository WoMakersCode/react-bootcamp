import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../actions'

const ToDoList = () => {
  const [todoItem, setTodoItem] = useState('')
  const dispatch = useDispatch()

  const addTodoItem = () => dispatch(addTodo(todoItem))

  return(
    <div>
      <input type="text" onChange={({ target: { value } }) => setTodoItem(value)}/>
      <button onClick={addTodoItem}>add todo</button>
    </div>

  )
}

export default ToDoList