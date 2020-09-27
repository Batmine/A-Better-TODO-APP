import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  // States
  const [inputText, setInputText] = useState(""); // we keep tracking of the inpuText.So the inputText is the value and setInputText is a function that allows to change this value
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // RUN ONCE when the app start
  useEffect(() => {
    getLocalTodos();
  }, []); // an empty array in order to run only once

  // USE EFFECT
  useEffect(() => {
    filterHander();
    saveLocalTodos();
  }, [todos, status]); //I'm adding a piece of State that changes, every time I'm adding a todo or changing my status, the function of filterhandler and saveLocalstorage gonna run

  // Functions
  const filterHander = () => {
    switch (
      status //Status there is about the list completed or uncompleted
    ) {
      case "completed": // In the case it's completed, then I'm gonna take the all todos and filter them and check if the todo is completed = true
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break; // The break is in order that doesn't continue on
      case "uncompleted": // Same there but for the uncompleted, with filtering the todos and check the todo with completed = false
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        // in order to show all of them
        setFilteredTodos(todos);
        break;
    }
  };

  // Save to Local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos)); // we push the new todos in the localStorage, so we are saving and pushing whatever we have in our State to the localStorage
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      // check if our localStorage has todos inside, and we can check that by saying null
      localStorage.setItem("todos", JSON.stringify([])); // if it does have anything then I'm gonna make an empty array
    } else {
      // Or if it does have something then we need to get that information "getItem" and parsing it (JSON.parse) and set this equal to a variable "todoLocal" and after that we push it to the State
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal); // We set the State, the todos there, to the todoLocal
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Batmine's Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />

      <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={
          todos
        } /*The piece of state with all of todos in the TodoList, here I'm passing down the state setTodos and Todos in the TodosList and after that I'll pass it down to Todo component then*/
      />
    </div>
  );
}

export default App;
