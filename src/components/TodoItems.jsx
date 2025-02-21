/** @format */
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { MdSaveAlt } from "react-icons/md";
import { useState } from "react";
function TodoItems({ todoItems, deleteTodo, editBtn }) {
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState();
  const handleDelete = () => {
    deleteTodo(todoItems);
  };

  const editBtns = () => {
    setEdit(true);
  };

  const editsBtn = () => {
    setEdit(false);
    editBtn(todoItems, editText);
  };
  return (
    <>
      <div className="todo">
        <input type="checkbox" className="checkbox" />
        <div className="task">
          {edit === true ? (
            <input
              className="edit_input"
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
          ) : (
            <p>{todoItems}</p>
          )}
        </div>
        <button className="edit">
          {edit === false ? (
            <CiEdit onClick={editBtns} />
          ) : (
            <MdSaveAlt onClick={editsBtn} />
          )}
          {/* <CiEdit /> <MdSaveAlt /> */}
        </button>
        <button className="delete">
          <MdOutlineDeleteOutline onClick={handleDelete} />
        </button>
      </div>
    </>
  );
}

export default TodoItems;
