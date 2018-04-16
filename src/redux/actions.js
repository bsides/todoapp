let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})
export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})
export const startEditTodo = id => ({
  type: 'START_EDIT_TODO',
  id
})
