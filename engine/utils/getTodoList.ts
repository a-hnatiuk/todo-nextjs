import { routers, baseUrl } from '../routes/routes';

export const getTodoList = async () => {
  const response = await fetch(`${baseUrl}${routers.apiTodos}`);

  return response.json();
};
