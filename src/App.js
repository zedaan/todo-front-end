import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import uuid from "uuid";
import axios from "axios";

import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  const baseUrl = "http://192.168.137.151:4000";

  useEffect(() => {
    axios.get(`${baseUrl}/`).then(res => setTodos(res.data.todos));
  }, []);

  // Toggle Complete
  const markComplete = id => {
    let newTodoState = [...todos];
    console.log(newTodoState, "test");
    const index = newTodoState.findIndex(item => item._id === id);
    newTodoState[index].completed = !newTodoState[index].completed;

    setTodos(newTodoState);
  };

  console.log(todos, "line 34");

  // Add Todo
  const addTodo = title => {
    axios
      .post(`${baseUrl}/`, {
        title,
        completed: false
      })
      .then(res => {
        res.data.id = uuid.v4();
        const newdata = todos;
        setTodos(newdata.concat(res.data.todo));
      });
  };

  // Delete Todo
  const delTodo = id => {
    axios.delete(`http://192.168.137.151:4000/${id}`).then(res => {
      const newTodos = todos.filter(item => item._id !== id);
      setTodos(newTodos);
    });
  };
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <AddTodo addTodo={addTodo} />
                <Todos
                  todos={todos}
                  markComplete={markComplete}
                  delTodo={delTodo}
                />
              </React.Fragment>
            )}
          />
        </div>
      </div>
    </Router>
  );
};

export default App;
