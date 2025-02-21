/** @format */
import { useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
function Header() {
  const [mode, setMode] = useState(false);
  const handleMode = () => {
    setMode(!mode);
    document.body.classList.toggle("dark");
  };
  return (
    <>
      <div className="bgcolor"></div>
      <div className="header">
        <header>MY TODO</header>
        <h2 className="mode">
          <button className="mode">
            {mode === false ? (
              <CiLight onClick={handleMode} />
            ) : (
              <MdDarkMode onClick={handleMode} />
            )}
          </button>
        </h2>
      </div>
    </>
  );
}

export default Header;
