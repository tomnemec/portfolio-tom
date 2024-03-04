import "./ProjectList.css";

function ProjectList() {
  return (
    <>
      <div className="header">
        <h1>
          <span className="number-chapter">B. </span>what I made
        </h1>
      </div>
      <div className="project-list">
        <div className="project-card">
          <img src="./src/assets/csstools.png" alt="" />
          <span className="project-title">CssTools</span>
        </div>
        <div className="project-card">
          <img src="./src/assets/ig.png" alt="" />
        </div>
        <div className="project-card">
          <img src="./src/assets/git.png" alt="" />
        </div>
      </div>
    </>
  );
}
export default ProjectList;
