import { combineReducers } from 'redux'
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          isDone: false,
          text: action.text
        }
      ]

    case 'TOGGLE_TODO':
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
      )

    case 'EDIT_TODO':
      return state.map(
        todo => (todo.id === action.id ? { ...todo, text: action.text } : todo)
      )

    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id)

    default:
      return state
  }
}
export default combineReducers({ todos })
