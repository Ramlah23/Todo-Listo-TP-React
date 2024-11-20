/* eslint-disable react/prop-types */
import { ListItem, ListItemText, IconButton, Checkbox } from '@mui/material';
import { RiDeleteBin6Fill } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";

// eslint-disable-next-line react/prop-types
const TodoItem = ({ todo, toggleComplete, removeTodo, editTodo }) => {
  return (
    <ListItem
      secondaryAction={
        <>
          <IconButton edge="end" aria-label="edit" onClick={() => editTodo(todo.id, todo.task)}>
            <CiEdit />
          </IconButton>
          <IconButton edge="end" aria-label="delete" onClick={() => removeTodo(todo.id)}>
            <RiDeleteBin6Fill />
          </IconButton>
        </>
      }
    >
      <Checkbox
        edge="start"
        checked={todo.completed}
        tabIndex={-1}
        disableRipple
        onClick={() => toggleComplete(todo.id)}
      />
      <ListItemText primary={todo.task} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} />
    </ListItem>
  );
};

export default TodoItem;