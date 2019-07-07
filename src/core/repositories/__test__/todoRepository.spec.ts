import TodoRepository from '../todoRepository';
import Todo, { ITodoRepository } from '../../entities/Todo';

let repo: ITodoRepository;
beforeEach( () => {
  repo = new TodoRepository();
});

describe('TodoRepository test', () => {
  it('should getAll todos', async () => {
    let todos = await repo.getAll();
    expect(todos.length).toBeGreaterThan(0);
  })

  it('should addTodo', async () => {
    let todo = new Todo('new Tododod');
    let savedTodo = await repo.addTodo(todo);
    expect(savedTodo).toHaveProperty('id');
    expect(savedTodo.title).toBe('new Tododod');
  });
})