/** @format */

import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Display from "./components/Display";
import Todo from "./components/Todo";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleTodo = (todo) => {
    setTodoItems([todo, ...todoItems]);
  };
  const deleteAll = () => {
    setTodoItems([]);
  };
  const deleteTodo = (todo) => {
    setTodoItems(todoItems.filter((item) => item !== todo));
  };
  const editBtn = (todo, edit) => {
    setTodoItems(todoItems.map((item) => (item === todo ? edit : item)));
  };

  return (
    <>
      <Header />
      <Input addTodo={handleTodo} />
      <Display change={todoItems} clear={deleteAll} />
      {todoItems.length > 0 ? (
        <Todo todoItems={todoItems} deleteTodo={deleteTodo} editBtn={editBtn} />
      ) : (
        <h1 className="NoTask">
          NO <b>TODO</b>
        </h1>
      )}
    </>
  );
}

export default App;
