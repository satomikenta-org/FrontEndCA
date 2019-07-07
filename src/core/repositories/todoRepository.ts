import { ITodo, ITodoRepository } from '../entities/Todo';
import axios from 'axios';

// Repository 
// repository does not care about error.
// interactor handles error thrown by repository and execute onSuccess or onFailer callback passed from UI(react). 

const BASE_URL = "http://localhost:3000"

export default class TodoRepository implements ITodoRepository {

  async getAll(): Promise<ITodo[]> {
    const { data } = await axios.get(`${BASE_URL}/todos/`);
    return data;
  }

  async addTodo(todo: ITodo): Promise<ITodo> {
    const {data} = await axios.post(`${BASE_URL}/todos/`, todo);
    return data;
  }
}

