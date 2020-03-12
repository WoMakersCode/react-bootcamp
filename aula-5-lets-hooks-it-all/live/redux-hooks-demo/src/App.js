import React from 'react';
import { Provider } from 'react-redux'
import store from './store'
import ToDoList from './containers/ToDoList'
import AddTodo from './containers/AddTodo'

function App() {
  return (
    <Provider store={store}>
      <h1>Todo list</h1>
      <AddTodo/>
      <ToDoList/>
    </Provider>
  );
}

export default App;
