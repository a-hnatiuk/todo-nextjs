import type { NextApiRequest, NextApiResponse } from 'next';
import { TodoItem } from '../../todos';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TodoItem>
) {
  const {
    query: { todosID },
    body,
  } = req;

  res.status(200).json(body);
}
