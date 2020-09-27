import React from "react";

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
  // our props, imported!
  // where I can write javascript code and function, there I'm using Props with the setInputText inside {} const Form = ({ setInputText })
  const inputTextHandler = (e) => {
    console.log(e.target.value); // e (event) the target gonna give me te input and value what I'm typing
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault(); // in order to stop refresh my app when I put a text
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 }, // We creat an object, with a random id and the text
    ]);
    setInputText(""); // We set the state back to 0
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <form>
      <input
        value={inputText}
        /*In order to keep a checking in our UI to update with the state, we add a value equal to the piece of state the inputText  */
        onChange={inputTextHandler}
        /*Eveytime the input changes the function inputTextHandled gonna run */ type="text"
        className="todo-input"
      />

      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
