import Todo from '../Todo';

describe('should validate', () => {
  it('should not throw error', () => {
    let todo = new Todo('sssss');
    expect(todo.isValid()).toBe(true);
  });

  it('should throw error', () => {
    let todo = new Todo('');
    expect(todo.isValid).toThrow(Error); // todo.isValid() => todo.isValid 
  });
});