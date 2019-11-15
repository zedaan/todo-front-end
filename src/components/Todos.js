import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

const Todos = props => {
  const newtodos = props.todos ? props.todos : [];
  return (
    <div>
      {newtodos &&
        newtodos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            markComplete={props.markComplete}
            delTodo={props.delTodo}
          />
        ))}
    </div>
  );
};

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

export default Todos;
