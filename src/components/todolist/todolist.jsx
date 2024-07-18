/* eslint-disable react/prop-types */

import { List } from '@mui/material';
import TodoItem from "../items/items";

// eslint-disable-next-line react/prop-types
const TodoList = ({ todos, toggleComplete, removeTodo, editTodo }) => {
  return (
    <List>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
          editTodo={editTodo}
        />
      ))}
    </List>
  );
};

export default TodoList;