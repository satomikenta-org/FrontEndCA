import React, { useEffect, useContext } from 'react';
import { todoInteractor } from './core/container';
import Context from './store/context';
import AddTodo from './AddTodo';


const TodoList = () => {
  const { state: { todos }, dispatch } = useContext(Context);

  useEffect(() => {
    todoInteractor.getAllTodos({ onSuccess, onFailure});
  }, []);

  const onSuccess = (newTodos) => {
    dispatch({ type: 'SET_TODOS', payload: newTodos });
  };

  const onFailure = (err) => {
    alert(err);
  };

  return (
    <div>
      { todos && todos.map( (todo, i) => (
        <div key={ i }>
          { todo.id }: 
          {' '}{ todo.title }
        </div>
      ))}
      <AddTodo/>
    </div>
  )
}

export default TodoList;