import "./ProjectList.css";
import CssToolsImage from "../assets/csstools.png";
import InstagramImage from "../assets/ig.png";
import GithubImage from "../assets/git.png";

function ProjectList() {
  return (
    <>
      <div className="header" id="made">
        <h1>
          <span className="number-chapter">B. </span>what I made
        </h1>
      </div>
      <div className="project-list">
        <a href="https://www.css-tools.dev">
          <div className="project-card">
            <img src={CssToolsImage} alt="" />
            <span className="project-title">CssTools</span>
          </div>
        </a>
        <a href="https://www.instagram.com/tom.is.coding">
          <div className="project-card">
            <img src={InstagramImage} alt="" />
            <span className="project-title">Instagram</span>
          </div>
        </a>
        <a href="https://www.github.com/tomnemec">
          <div className="project-card">
            <img src={GithubImage} alt="" />
            <span className="project-title">Github</span>
          </div>
        </a>
      </div>
    </>
  );
}
export default ProjectList;
