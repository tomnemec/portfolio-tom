import "./SkillList.css";

function SkillList() {
  return (
    <>
      <div className="header">
        <h1>A. My Skills</h1>
      </div>
      <ol className="skills">
        <li>
          <div className="header-group">
            <span className="number">I.</span>
            <span className="title">FrontEnd</span>
          </div>
          <p className="description">
            For my FrontEnd, I use HTML, CSS, and JavaScript. I am familiar with
            React and Angular, using them to build my projects. My first
            experience was with Angular, which I employ for more complex
            projects.
          </p>
        </li>
        <li>
          <div className="header-group">
            <span className="number">II.</span>
            <span className="title">BackEnd</span>
          </div>
          <p className="description">
            For my Backend, I use Node.js, Express, and MongoDB. I am also
            familiar with .NET and SQL, which was my first technology for
            building backend systems. I am adept at creating my own APIs and
            consuming third-party APIs like Stripe and Discord.
          </p>
        </li>
        <li>
          <div className="header-group">
            <span className="number">III.</span>
            <span className="title">Tools</span>
          </div>
          <p className="description">
            As a developer, I frequently use Git and Github to manage my code.
            For testing APIs, I use POSTMAN. My favorite IDE is VS Code.
          </p>
        </li>
      </ol>
    </>
  );
}
export default SkillList;
