import React from "react";
import { Rnd } from "react-rnd";
import notepad from "../resources/notepad.ico";
import exit from "../resources/exit.png";

// Resources
import me from "../resources/me.png";

// Fontawesome
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhoneSquareAlt } from "@fortawesome/free-solid-svg-icons";
import { faSkype } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
const email = <FontAwesomeIcon icon={faPaperPlane} />;
const linkedin = <FontAwesomeIcon icon={faLinkedin} />;
const phone = <FontAwesomeIcon icon={faPhoneSquareAlt} />;
const skype = <FontAwesomeIcon icon={faSkype} />;
const github = <FontAwesomeIcon icon={faGithubSquare} />;

const AboutMe = props => {
  return (
    <Rnd
      className="resume-window"
      default={{
        x: 100,
        y: 100,
        width: 500,
        height: 500
      }}
    >
      <div className="option-bar">
        <img className="option-type" src={notepad} />
        <img
          className="option-close"
          name="aboutme"
          onClick={e => props.onClick(e)}
          src={exit}
        />
      </div>
      <div className="sub-option-bar">
        <a className="resume-download" href="#">
          About Me
        </a>
      </div>
      <div className="aboutme-wrapper">
        <div className="aboutme-title">
          <img className="profile-pic" src={me} />
          <div className="aboutme-right">
            <h4>Richard Braamburg</h4>
            <div className="details">
              <i>{email}</i>
              <a href="mailto:richardbraamburg@gmail.com">Email</a>
            </div>
            <div className="details">
              <i>{phone}</i>
              <a href="tel:+19293546496">Call me</a>
            </div>
            <div className="details">
              <i>{skype}</i>
              <a href="skype:richard.braamburg?chat">Skype</a>
            </div>
            <div className="details">
              <i>{linkedin}</i>
              <a href="https://www.linkedin.com/in/richardbraamburg">
                LinkedIn
              </a>
            </div>
            <div className="details">
              <i>{github}</i>
              <a href="https://github.com/RicoVendritto">GitHub</a>
            </div>
          </div>
        </div>
        <div className="aboutme-text">
          <p>
            I am an affable Software Developer and Solutions Engineer who holds
            over five years of experience understanding and resolving the needs
            of the clients I support. In both creating user-centric websites and
            managing relationships with large clients, I love dissecting complex
            information and strategically communicating important takeaways to
            both technical and non-technical stakeholders.
          </p>
        </div>
      </div>
    </Rnd>
  );
};

export default AboutMe;
