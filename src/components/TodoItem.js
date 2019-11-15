import React from "react";
import PropTypes from "prop-types";

const TodoItem = props => {
  console.log(props.todo.completed, "new");
  const getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: props.todo.completed ? "line-through" : "none",
      fontFamily: "'Roboto', sans-serif",
      fontWeight: "400",
      fontSize: "1.2rem"
    };
  };

  const { _id, title } = props.todo;

  return (
    <div style={getStyle()}>
      <p>
        <input
          style={{ marginRight: "1rem" }}
          type="checkbox"
          onChange={e => {
            props.markComplete(_id);
          }}
        />
        {title}
        <button
          onClick={e => {
            e.preventDefault();
            props.delTodo(_id);
          }}
          style={btnStyle}
        >
          x
        </button>
      </p>
    </div>
  );
};

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

const btnStyle = {
  color: "#ff0000",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
  fontSize: "1.2rem",
  background: "transparent"
};

export default TodoItem;
