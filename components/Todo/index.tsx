import React, { ChangeEvent, FC, useState } from 'react';
import { Typography, InputBase, Paper, Stack } from '@mui/material';
import { postTodo } from 'engine/utils/postTodo';
import { Card } from 'components/Card';
import { Button } from 'components/Button';
import styles from 'components/Todo/todo.module.scss';

interface TodoProps {
  text: string;
  id: string;
}

export const Todo: FC<TodoProps> = ({ text, id }) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [todoValue, setTodoValue] = useState<string>(text);

  const editHandler = () => {
    setEditMode(true);
  };

  const inputChangeHandler = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setTodoValue(e.target.value);
  };

  const saveHandler = async () => {
    const updatedTodo = await postTodo({
      id,
      text: todoValue,
    });
    setEditMode(false);
    setTodoValue(updatedTodo.text);
  };

  return (
    <Card className={styles.todoItem}>
      {editMode ? (
        <Paper component="form" className={styles.editForm}>
          <InputBase
            value={todoValue}
            onChange={inputChangeHandler}
            placeholder="Create your todo"
            classes={{ root: styles.input }}
          />
          <Button variant="contained" onClick={saveHandler}>
            Save
          </Button>
        </Paper>
      ) : (
        <Stack direction="column" spacing={2}>
          <Typography variant="caption">{todoValue}</Typography>
          <Button variant="contained" onClick={editHandler}>
            Edit
          </Button>
        </Stack>
      )}
    </Card>
  );
};
