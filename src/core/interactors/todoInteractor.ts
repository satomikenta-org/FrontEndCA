
import Todo, { ITodo, ITodoRepository } from '../entities/Todo';

// Interactor (Usecase)
// Interactor handle Error by onSuccess or OnFailure passed by UIPresenter(React).
// Interactor does'nt care what the datasource(ex API or LocalStorage) is.
// Repository care which datasource uses, Thats Why inject IRepository to Interactor in container.js
// If We want to change Datasource, just create new concreat Repository and inject.

interface CallBacks  {
  onSuccess(todos: ITodo[]):void
  onFailure(error: Error):void
}

export default class TodoInteractor  {
  
  constructor(private repository: ITodoRepository){};
  
  async getAllTodos( {onSuccess, onFailure}: CallBacks ) {
    try {
      const todos = await this.repository.getAll(); 
      onSuccess(todos);
    } catch (err) {
      onFailure(err);
    }
  }

  async addTodo(title: string, { onSuccess, onFailure }: CallBacks) {
    try {
      let todo = new Todo(title);
      if (todo.isValid()) {
        const newTodo = await this.repository.addTodo(todo);
        onSuccess([newTodo]);
      }
    } catch (err) {
      onFailure(err);
    }
  }
}