const INITIAL_STATE = {
  todos: [
    'Click to remove',
    'Learn React Native',
    'Write Code',
    'Ship App'
  ]
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_TODO':
      return { ...state, todos: [payload, ...state.todos] };
    case 'REMOVE_TODO':
      return { ...state, todos: state.todos.filter((todo, i) => i !== payload)};
    default:
      return state;
  }
};
