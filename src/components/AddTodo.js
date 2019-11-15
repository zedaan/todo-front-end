import React, { useState } from "react";
import PropTypes from "prop-types";

const AddTodo = props => {
  const [title, setTitle] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    props.addTodo(title);
    setTitle("");
  };

  return (
    <form onSubmit={e => onSubmit(e)} style={{ display: "flex" }}>
      <input
        id="myForm"
        type="text"
        name="title"
        style={{ flex: "10", padding: "5px" }}
        placeholder="Add Todo ..."
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        type="submit"
        value="Submit"
        className="btn"
        style={{ flex: "1" }}
      />
    </form>
  );
};

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default AddTodo;
