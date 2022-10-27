import { routers, baseUrl } from '../routes/routes';
import { TodoItem } from '../types/todo';

export const postTodo = async (todo: TodoItem) => {
  const response = await fetch(`${baseUrl}${routers.apiTodos}/${todo.id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });

  return response.json();
};
