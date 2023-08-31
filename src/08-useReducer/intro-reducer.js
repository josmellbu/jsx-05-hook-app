const initialState = [
  {
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false,
  },
];

const newTodo = {
  id: 2,
  todo: 'Recolectar la piedra del Poder',
  done: false,
}

const addTodoAction = {
  type: '[TODO] add todo',
  payload: newTodo,
}
const todoReducer = ( state = initialState, action = {} ) => {

  if ( addTodoAction.type === '[TODO] add todo') {
    return [ ...state, action.payload ]
  }

  return state;
}

let todos = todoReducer();



todos = todoReducer( todos, addTodoAction )