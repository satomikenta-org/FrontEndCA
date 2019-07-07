import TodoRepository from "../../repositories/todoRepository";
import TodoInteractor from '../todoInteractor';
import Todo from "../../entities/Todo";

let interactor: TodoInteractor;
let count = 0;

beforeEach(() => {
  let todoRepo = new TodoRepository();
  interactor = new TodoInteractor(todoRepo);
});

const onSuccess = (todos: Todo[]) => {
  count = 1;
}
const onFailure = (err: Error) => {
  count = -1;
}

describe('todoInteractor', () => {
  it('should not add todo cuz invalid title', async (done) => {
    await interactor.addTodo('', { onSuccess, onFailure });
    expect(count).toEqual(-1);
    done();
  });

  it('should add todo', async (done) => {
    await interactor.addTodo('valid todo', { onSuccess, onFailure });
    expect(count).toEqual(1);
    done();
  });

  it('should getAll todo', async () => {
    await interactor.getAllTodos({ onSuccess, onFailure});
    expect(count).toEqual(1);
  })
})