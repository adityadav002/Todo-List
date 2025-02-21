/** @format */
import { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
function Input({ addTodo }) {
  const [value, setValue] = useState();
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const addBtn = () => {
    if (value.trim() === "") return;
    else {
      addTodo(value);
      setValue("");
    }
  };
  return (
    <>
      <div className="input_contain">
        <button className="plus">
          <IoAddCircleOutline />
        </button>
        <input
          type="text"
          placeholder="Add a new task"
          value={value}
          onChange={handleChange}
        />
        <button className="add" onClick={addBtn}>
          ADD
        </button>
      </div>
    </>
  );
}

export default Input;
