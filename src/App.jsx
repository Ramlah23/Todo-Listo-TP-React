import { useState, useEffect } from "react";
import TodoForm from "./components/form/Form";
import TodoList from "./components/todolist/todolist";
import { Footer } from "./components/footer/footer.jsx";
import Filtros from "./components/filtros/filtros.jsx";
import { Container, Typography, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from "@mui/material";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [filtro, setFiltro] = useState("todas");
  const [openEdit, setOpenEdit] = useState(false); // Estado para controlar el modal de edición
  const [openDelete, setOpenDelete] = useState(false); // Estado para controlar el modal de eliminación
  const [editTask, setEditTask] = useState(""); // Tarea que se editará
  const [editId, setEditId] = useState(null); // ID de la tarea a editar
  const [deleteId, setDeleteId] = useState(null); // ID de la tarea a eliminar

  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
    setOpenDelete(false); // Cierra el modal después de eliminar
  };

  const handleEditClick = (id, task) => {
    setEditId(id);
    setEditTask(task);
    setOpenEdit(true);
  };

  const handleEditSubmit = () => {
    if (editTask.trim()) {
      setTodos(
        todos.map((todo) =>
          todo.id === editId ? { ...todo, task: editTask } : todo
        )
      );
      setOpenEdit(false);
      setEditTask("");
      setEditId(null);
    }
  };

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setOpenDelete(true); // abre modal de eliminación
  };

  const tareasFiltradas = todos.filter((todo) => {
    if (filtro === "todas") return true;
    if (filtro === "completas") return todo.completed;
    if (filtro === "incompletas") return !todo.completed;
    return true;
  });

  return (
    <div className="App">
      <Container>
        <Typography sx={{ marginTop: "30px" }} variant="h4" gutterBottom>
          Todo Listo
        </Typography>
        <TodoForm addTodo={addTodo} />
        <Filtros filtro={filtro} setFiltro={setFiltro} />
        <TodoList
          todos={tareasFiltradas}
          toggleComplete={toggleComplete}
          removeTodo={handleDeleteClick} // Actualizamos la función de eliminar
          editTodo={handleEditClick}
        />
      </Container>

      {/* Modal para editar tarea */}
      <Dialog open={openEdit} onClose={() => setOpenEdit(false)}>
        <DialogTitle>Editar Tarea</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            fullWidth
            label="Tarea"
            value={editTask}
            onChange={(e) => setEditTask(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEdit(false)} color="secondary">
            Cancelar
          </Button>
          <Button onClick={handleEditSubmit} color="primary">
            Guardar
          </Button>
        </DialogActions>
      </Dialog>

      {/* Modal de confirmación para eliminar tarea */}
      <Dialog open={openDelete} onClose={() => setOpenDelete(false)}>
        <DialogTitle>¿Estás seguro de que deseas eliminar esta tarea?</DialogTitle>
        <DialogActions>
          <Button onClick={() => setOpenDelete(false)} color="secondary">
            Cancelar
          </Button>
          <Button
            onClick={() => removeTodo(deleteId)} // Elimina la tarea
            color="primary"
          >
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>

      <Footer />
    </div>
  );
};

export default App;