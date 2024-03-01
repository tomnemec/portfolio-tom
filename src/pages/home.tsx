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
      </div>
    </>
  );
}

export default Home;
