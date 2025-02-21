/** @format */
import TodoItems from "./TodoItems";
function Todo({ todoItems, deleteTodo, editBtn }) {
  return (
    <>
      {todoItems.map((items) => (
        <TodoItems
          key={items}
          todoItems={items}
          deleteTodo={deleteTodo}
          editBtn={editBtn}
        />
      ))}
    </>
  );
}

export default Todo;
