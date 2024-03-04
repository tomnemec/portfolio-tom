import { useState } from "react";
import "./NavList.css";

function NavList() {
  // State to manage the active page
  const [activePage, setActivePage] = useState("");

  // Function to set the active page
  const handleSetActivePage = (pageId: any) => {
    setActivePage(pageId);
  };

  return (
    <div className="nav-section">
      <div className="nav-container">
        <span className="nav-title">NAVIGATION</span>
        <ol>
          <li>
            <a
              href="#technologies"
              className={activePage === "technologies" ? "active" : ""}
              onClick={() => handleSetActivePage("technologies")}
            >
              technologies I know
            </a>
          </li>
          <li>
            <a
              href="#made"
              className={activePage === "made" ? "active" : ""}
              onClick={() => handleSetActivePage("made")}
            >
              what I made
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activePage === "about" ? "active" : ""}
              onClick={() => handleSetActivePage("about")}
            >
              something about me
            </a>
          </li>
          <li>
            <a
              href="#goals"
              className={activePage === "goals" ? "active" : ""}
              onClick={() => handleSetActivePage("goals")}
            >
              future path & goals
            </a>
          </li>
        </ol>
      </div>
      <span className="design-text">
        ← Design aspect without function? Why not.
      </span>
    </div>
  );
}

export default NavList;
