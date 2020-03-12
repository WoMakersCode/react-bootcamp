const INITIAL_STATE = {
  toDoList:['limpar a casa']
}

function todos(state=INITIAL_STATE, action){
  switch(action.type){
    case 'ADD_TODO':
      return {...state, toDoList:[ ...state.toDoList, action.item]}
    default:
      return state
  }
}

export default todos