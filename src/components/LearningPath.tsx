import "./LearningPath.css";

function LearningPath() {
  return (
    <div className="learning-path">
      <div className="row">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <div className="header goals ">
        <h1>future path & goals</h1>
      </div>
      <div className="cards">
        <div className="goal-card">
          <span>Finish learning React Native.</span>
        </div>
        <div className="goal-card">
          <span>Improve my code writing skills.</span>
        </div>
        <div className="goal-card">
          <span>Start doing Leetcode daily.</span>
        </div>
        <div className="goal-card">
          <span>Join more community projects.</span>
        </div>
        <div className="goal-card">
          <span>Continue with daily content creation.</span>
        </div>
        <div className="goal-card">
          <span>Extend services provided to beginners.</span>
        </div>
        <div className="goal-card">
          <span>Offer more free slots to clients.</span>
        </div>
        <div className="goal-card">
          <span>Keep a positive vibe!</span>
        </div>
      </div>
    </div>
  );
}
export default LearningPath;
