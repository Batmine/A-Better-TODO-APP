import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  //Events
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id)); // I'm comparing the element that we are clicking on to match the one from the state.
    // So "todos.filter", I'm filtering the STATE out and going by all the todos,
    // "(el) => el.id" I'm trying to find an elemend that matches with whatever we clicked on, the todo id, then it's gonna delete it if it's matches "el.id !== todo.id"
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        // I'm going over each item or todo in the State, and I'm checking if (item.id === todo.id), If I'm clicking on the todo that has the same id that is in the State
        // If it doesI'm gonna return an object here "...item,  completed: !item.completed," and I'm just gonna pass on whatever propreties that item that already had "...item"
        // The thing I'm trying to modify here is only that completed proprety, switch the completed from false to true and vice-versa,
        // and that "...item" means just add all the others propreties "id, text" and just modify the "completed", and I want to modify this to the oposite of item.completed that's why !item.completed
        // In case it did not match, just return whatever it was "return item;"
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li
        className={`todo-item ${todo.completed ? "completed" : ""}`} // ${todo.completed ? if this is true (the completed proprety is true) then I can add a class of completed "completed"
        //if it's not I'm not gonna add anything, just a pair of : ""
      >
        {text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
