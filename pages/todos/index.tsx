import React from 'react';
import { Typography } from '@mui/material';
import { NextPage, GetStaticProps } from 'next';
import styles from './todos.module.scss';
import { Button } from '../../components/Button';
import { routers } from '../../engine/routes/routes';
import { Todo } from '../../components/Todo';
import { getTodoList } from '../../engine/utils/getTodoList';
import { TodoItem } from '../../engine/types/todo';

interface TodosProps {
  todos: Array<TodoItem>;
}

const Todos: NextPage<TodosProps> = ({ todos }) => (
  <>
    <Button href={routers.home} variant="outlined">
      Back
    </Button>
    <Typography variant="h1">Todo list</Typography>
    <div className={styles.todosWrapper}>
      {todos &&
        todos.map((todo) => (
          <Todo key={todo.id} id={todo.id} text={todo.text} />
        ))}
    </div>
  </>
);

export default Todos;

export const getStaticProps: GetStaticProps<{
  todos: TodoItem[];
}> = async () => {
  const todos = await getTodoList();

  return {
    props: {
      todos,
    },
  };
};
