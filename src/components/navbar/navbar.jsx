

import { useState } from 'react';
import { TextField, Button } from '@mui/material';

// eslint-disable-next-line react/prop-types
const TodoForm = ({ addTodo }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Nueva Tarea"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Añadir
      </Button>
    </form>
  );
};

export default TodoForm;