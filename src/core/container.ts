import TodoInteractor from './interactors/todoInteractor';
import TodoRepository from './repositories/todoRepository';


const todoInteractor = new TodoInteractor(new TodoRepository());

export {
  todoInteractor
};
