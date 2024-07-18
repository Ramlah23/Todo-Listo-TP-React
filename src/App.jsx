

import { useState } from 'react';
import TodoForm from './components/navbar/navbar';
import TodoList from './components/todolist/todolist';
import { Container, Typography } from '@mui/material';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    setTodos([...todos, { id: Date.now(), task, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id) => {
    const newTask = prompt('Edita tu tarea:');
    if (newTask) {
      setTodos(todos.map(todo => todo.id === id ? { ...todo, task: newTask } : todo));
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Todo Listo
      </Typography>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} editTodo={editTodo} />
    </Container>
  );
};

export default App;