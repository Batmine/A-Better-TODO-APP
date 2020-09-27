import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((
          todo // we can map through our array of object, and for each object ( for each todo filtered by our filteredTodos from the State), we can render out a Todo component
        ) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            key={todo.id}
            todo={todo} // I'm passing down the each individual todo from the mapping to here. So after we go each element, we have access to each one and set this down as a proprety.
            text={todo.text}
          /> // I pass down a Prop here (text), I've pass down this data from my state. By giving a unique id/key react can know exactly what to remove and what to keep to render out the list
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
