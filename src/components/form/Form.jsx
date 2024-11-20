import { useState } from "react";
import { TextField, Button, Box} from "@mui/material";

// eslint-disable-next-line react/prop-types
const TodoForm = ({ addTodo }) => {
  const [task, setTask] = useState("");
  const [error, setError] = useState(false); // Estado para manejar el mensaje de error

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) {
      // Si el campo está vacío o solo contiene espacios
      setError(true);
      return;
    }
    addTodo(task.trim()); // Añade la tarea sin espacios extra
    setTask("");
    setError(false); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row", 
          gap: 2, 
          alignItems: "center", 
        }}
      >
        <TextField
          label="Nueva Tarea"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          error={error} // Muestra el error si el estado `error` es verdadero
          helperText={error ? "La tarea no puede estar vacía" : ""}
          sx={{
            flex: 1, // Ajusta el ancho del input
            minWidth: "200px", // Asegura un tamaño mínimo
          }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#fe7be8",
            whiteSpace: "nowrap",
            minWidth: "100px",
          }}
        >
          Añadir
        </Button>
      </Box>
    </form>
  );
};

export default TodoForm;
