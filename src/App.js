import React, { useContext, useReducer } from 'react';
import TodoList from './TodoList';

import Context from './store/context';
import Reducer from './store/reducer';

function App(){
  const initialState = useContext(Context);
  const [ state, dispatch ] = useReducer(Reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className="App">
        <h1>Clean Architecture Demo</h1>
        <TodoList/>
      </div>
    </Context.Provider>
  );
}

export default App;
