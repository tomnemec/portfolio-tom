import "./AboutMe.css";

function AboutMe() {
  return (
    <>
      <div className="header about-me " id="about">
        <h1>
          <span className="number-chapter">C. </span>something about me
        </h1>
      </div>
      <div className="about-row">
        <div className="about-card">
          <span className="about-title">who am I</span>
          <p className="about-description">
            I am a self-taught web developer who codes both professionally and
            as a hobby. I mostly work with MERN, MEAN, and .NET. I share my work
            through social media, especially on my business Instagram account,
            where I showcase various projects.
          </p>
        </div>
        <div className="about-card">
          <span className="about-title">why I code</span>
          <p className="about-description">
            I started to code because I've always been interested in how coding
            and programs work. After starting with coding, I fell in love. I
            really enjoy the endless possibilities for creating new things.
          </p>
        </div>
      </div>
      <div className="about-row">
        <div className="about-card">
          <span className="about-title">why I make content</span>
          <p className="about-description">
            I started creating content on social media because I sought feedback
            from the community, but it quickly turned out that my content is
            really interesting for a lot of people. I liked the process of
            getting better and better, and that's why I still provide content to
            the community
          </p>
        </div>
        <div className="about-card">
          <span className="about-title">my style</span>
          <p className="about-description">
            I love to create a simple and modern style. This portfolio is my
            jam—simple, minimalistic, yet I feel satisfied with it. I also like
            to work on cyberpunk-like projects, but building this one was great.
          </p>
        </div>
      </div>
    </>
  );
}
export default AboutMe;
