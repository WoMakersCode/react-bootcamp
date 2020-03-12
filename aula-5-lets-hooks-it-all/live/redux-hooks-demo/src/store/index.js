  import { createStore } from 'redux'
  import todos from '../reducers/todos'
  
  const store = createStore(todos)

  export default store