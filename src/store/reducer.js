
const Reducer = ((state, { type, payload }) => {
  switch(type) {
    case 'SET_TODOS': 
      return { ...state, todos: payload };
    case 'ADD_TODO':
      const newTodos = [...state.todos, payload[0]];
      return { ...state, todos: newTodos };
    default:
      return state;
  }
});

export default Reducer;