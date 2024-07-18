

import { useState } from 'react';
import TodoForm from './components/form/Form';
import TodoList from './components/todolist/todolist';
import { Footer } from './components/footer/footer.jsx';
import { Container, Typography } from '@mui/material';
import "./App.css";

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
    <div className="App">
    <Container>
      <Typography variant="h4" gutterBottom>
        Todo Listo
      </Typography>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} editTodo={editTodo} />
    </Container>
    <Footer />
    </div>

  );
};

export default App;