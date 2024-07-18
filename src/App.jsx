import { useState } from "react";
import TodoForm from "./components/form/Form";
import TodoList from "./components/todolist/todolist";
import { Footer } from "./components/footer/footer.jsx";
import { Container, Typography, Box } from "@mui/material";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    setTodos([...todos, { id: Date.now(), task, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    const newTask = prompt("Edita tu tarea:");
    if (newTask) {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, task: newTask } : todo
        )
      );
    }
  };

  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const incompleteTodos = todos.length - completedTodos;

  return (
    <div className="App">
      <Container>
        <Typography variant="h4" gutterBottom>
          Todo Listo
        </Typography>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
          editTodo={editTodo}
        />
        <Box mt={2}>
          <Typography variant="body1">Total de Tareas: {totalTodos}</Typography>
          <Typography variant="body1">
            Tareas Completas: {completedTodos}
          </Typography>
          <Typography variant="body1">
            Tareas Incompletas: {incompleteTodos}
          </Typography>
        </Box>
      </Container>

      <Footer />
    </div>
  );
};

export default App;
