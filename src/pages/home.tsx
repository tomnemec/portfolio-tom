import AboutMe from "../components/AboutMe";
import LearningPath from "../components/LearningPath";
import NavList from "../components/NavList";
import ProjectList from "../components/ProjectList";
import SkillList from "../components/SkillList";
import TechCard from "../components/TechCard";
import "./home.css";

function Home() {
  return (
    <>
      <div className="main-container">
        <section className="landing-section">
          <div className="about">
            <h1>
              Hello!
              <br />
              I’m Tom.
            </h1>
            <ul>
              <li>Web Developer</li>
              <li>
                Content creator
                <a href="https://www.instagram.com/tom.is.coding/">
                  @tom.is.codin
                </a>
              </li>
              <li>codin.with.tom@gmail.com</li>
            </ul>
          </div>
          <TechCard />
          <NavList />
        </section>
        <SkillList />
        <ProjectList />
        <AboutMe />
        <LearningPath />
        <hr />
        <div className="foot">
          <span>I hope you liked my portfolio!</span>
          <span>Feel free to contact me on my Instagram or Email.</span>
        </div>
      </div>
    </>
  );
}

export default Home;
