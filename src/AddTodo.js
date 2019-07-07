import React, { useState, useContext } from 'react'
import { todoInteractor } from './core/container';
import Context from './store/context';

export default function AddTodo() {

  const [title, setTitle] = useState("");
  const {dispatch} = useContext(Context);

  const handleOnChange = e => {
    setTitle(e.target.value);
  }

  const handleAddTodo = () => {
    todoInteractor.addTodo(title, { onSuccess, onFailure });
  };

  const onSuccess = (newTodo) => {
    dispatch({ type: 'ADD_TODO', payload: newTodo });
    setTitle('');
  };

  const onFailure = (err) => {
    alert(err);
  };

  return (
    <div>
      <input name="title" placeholder="title" value={title} onChange={ handleOnChange }/>
      <button onClick={handleAddTodo}>Add</button>
    </div>
  )
}
