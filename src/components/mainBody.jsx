import "./main.css";
import emailIcon from "../assets/email.svg";
import linkedinIcon from "../assets/linkedin.svg";

function MainBody() {
  return (
    <div className="mainBody">
      <div className="details">
        <h2 className="name">Hemant Bagaria</h2>
        <h3 className="role">Front-End Developer</h3>
        <a href="#" className="website">
            HemantBagaria.website
        </a>
      </div>

      <div className="important-links">
        <a href="mailto:hemantsmail29@gmail.com">
          <button type="button" id="email">
            <img src={emailIcon} alt="Email" />
            <p>Email</p>
          </button>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/hemant-bagaria-748707249/">
          <button type="button" id="linkedin">
            <img src={linkedinIcon} alt="LinkedIn" />
            <p>LinkedIn</p>
          </button>
        </a>
      </div>

      <div className="about-section">
        <h4>About</h4>
        <p>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
        <br />
        <h4>Interests</h4>
        <p>
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </div>
  );
}

export default MainBody;
