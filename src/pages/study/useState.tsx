import React, { useState, useCallback } from 'react';
import { Container, TextField, Button, List, ListItem, ListItemText, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { v4 as uuidv4 } from 'uuid';

type Task = {
  id: string;
  text: string;
};

const TodoApp: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState('');

  const handleAddTask = useCallback(() => {
    if (input.trim()) {
      setTasks(prevTasks => [...prevTasks, { id: uuidv4(), text: input.trim() }]);
      setInput('');
    }
  }, [input]);

  const handleDeleteTask = useCallback((taskId: string) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  }, []);

  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTask();
    }
  }, [handleAddTask]);

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>ToDo List</Typography>
      <Typography variant="h6" gutterBottom>useStateの解説</Typography>
      <Typography paragraph>
        useStateは、コンポーネントのローカル状態を管理するためのReactフックです。このアプリでは、
        <strong>tasks</strong>と<strong>input</strong>の二つの状態をuseStateで管理しています。<br />
        <strong>tasks</strong>はToDoリストの項目を配列で保持し、新しいタスクが追加されるたびに配列が更新されます。
        <strong>input</strong>はユーザーが入力フィールドに入力したテキストを保持し、エンターキーを押すか「追加」ボタンをクリックすると、
        このテキストが新しいタスクとして<strong>tasks</strong>に追加され、再レンダリングされます。<br />
      </Typography>
      <Typography variant="h6" gutterBottom>ToDoアプリ操作</Typography>
      <form onSubmit={(e) => { e.preventDefault(); handleAddTask(); }}>
        <TextField
          label="新しいタスク"
          variant="outlined"
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <Button
          type="submit"
          onClick={handleAddTask}
          variant="contained"
          color="primary"
          style={{ marginTop: '10px' }}
          aria-label="タスクを追加"
        >
          追加
        </Button>
      </form>
      <List>
        {tasks.map((task) => (
          <ListItem
            key={task.id}
            secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(task.id)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary={task.text} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default TodoApp;