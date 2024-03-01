import "./NavList.css";

function TechCard() {
  return (
    <div className="nav-section">
      <div className="nav-container">
        <span className="nav-title">NAVIGATION</span>
        <ol>
          <li>
            <a href="">technologies I know</a>
          </li>
          <li>
            <a href="">what I made</a>
          </li>
          <li>
            <a href="">something about me</a>
          </li>
          <li>
            <a href="">future path & goals</a>
          </li>
        </ol>
      </div>
      <span className="design-text">
        ← Design aspect without function? Why not.
      </span>
    </div>
  );
}
export default TechCard;
