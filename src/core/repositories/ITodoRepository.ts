import {ITodo} from '../entities/Todo';

export interface ITodoRepository {
  getAll(): Promise<ITodo[]>;
  addTodo(): Promise<ITodo>; 
}