/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO'

/*
 * action creators
 */

export function addTodo(item) {
  return { type: ADD_TODO, item }
}