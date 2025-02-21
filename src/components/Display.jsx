/** @format */
import { RiDeleteBin6Fill } from "react-icons/ri";

function Display({ change, clear }) {
  const display = change.length;
  return (
    <>
      <div className="content">
        <h3 className="left_content">{display} Task left</h3>
        <h3>
          <button className="clear" onClick={clear}>
            <RiDeleteBin6Fill />
          </button>
        </h3>
      </div>
    </>
  );
}

export default Display;
