import type { NextApiRequest, NextApiResponse } from 'next';
import { TodoItem } from '../../todos';
import { todosMockList } from '../mock/todosMockList';

type TodosList = Array<TodoItem>;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TodosList>
) {
  res.status(200).json(todosMockList);
}
