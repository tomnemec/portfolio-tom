import "./TechCard.css";
import ImageOne from "../assets/assets-landing/1.jpg";
import ImageTwo from "../assets/assets-landing/2.jpg";
import ImageThree from "../assets/assets-landing/3.jpg";
import ImageFour from "../assets/assets-landing/4.jpg";
import ImageFive from "../assets/assets-landing/5.jpg";
import ImageSix from "../assets/assets-landing/6.jpg";

function TechCard() {
  return (
    <div className="tech-board">
      <div className="row">
        <img className="tech-item" src={ImageOne} alt="" />
        <img className="tech-item" src={ImageTwo} alt="" />
        <img className="tech-item" src={ImageThree} alt="" />
      </div>
      <div className="row">
        <img className="tech-item" src={ImageFour} alt="" />
        <img className="tech-item" src={ImageFive} alt="" />
        <img className="tech-item" src={ImageSix} alt="" />
      </div>
      <div className="row">
        <img className="tech-item" src={ImageOne} alt="" />
        <img className="tech-item" src={ImageTwo} alt="" />
        <img className="tech-item" src={ImageThree} alt="" />
      </div>
    </div>
  );
}
export default TechCard;
