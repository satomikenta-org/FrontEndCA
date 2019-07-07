
// Entity TODO
// Entity depends on nothing


export interface ITodo {
  id?: number;
  title: string;

  isValid(): (boolean | Error);
}

export interface ITodoRepository {
  getAll(): Promise<ITodo[]>;
  addTodo(todo: ITodo): Promise<ITodo>;
}

class Todo implements ITodo{

  id?: number;
  title: string;
  constructor(title: string, id?: number){
    this.id = id;
    this.title = title;
  }

  isValid(): boolean | Error {
    if (this.title.length > 3) {
      return true;
    }
    throw new Error('Invalid Title');
  }
}

export default Todo;