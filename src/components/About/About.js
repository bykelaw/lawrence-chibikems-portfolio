import React from 'react';
import "./About.css";
import pic from "./../../assets/images/me.JPG"
import { faFighterJet, faTabletAlt, faLightbulb, faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const About = () => {
  return (
    <div id="ab">
      <h1 className="title">About</h1>
      <div className="top-sec">
        <div className="sub-sec">
          <div className="hexagon">
            < div className = "icon-pics" > <span > <FontAwesomeIcon icon={faFighterJet}></FontAwesomeIcon></span > </div>
          </div>
          <h4>Fast</h4>
          <p>Fast load times and lag free interaction, my highest priority.</p>
          </div>
        <div className="sub-sec">
          <div className="hexagon">
            <div className="icon-pics"><span > <FontAwesomeIcon icon={faTabletAlt}></FontAwesomeIcon></span ></div>
          </div>
          <h4>Responsive</h4>
          <p>My layouts will work on any device, big or small.</p>
          </div>
        <div className="sub-sec">
          <div className="hexagon">
            <div className="icon-pics"><span><FontAwesomeIcon icon={faLightbulb}/></span></div>
          </div>
          <h4>Intuitive</h4>
          <p>Strong preference for easy to use, intuitive UX/UI.</p>
          </div>
        <div className="sub-sec">
          <div className="hexagon">
            <div className="icon-pics"> <span > <FontAwesomeIcon icon={faSyncAlt}></FontAwesomeIcon></span > </div>
          </div>
          <h4>Dynamic</h4>
          <p>Websites don't have to be static, I love making pages come to life.</p>
          </div>
      </div>
    <div className="bottom-sec">
        <div className="left-sec">
          <div className="my-pics-container"><img src={pic} alt=""/></div>
          <h4>Who am I ? </h4>
<p>I'm a freelance Front-End Developer.I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
Let's make something special.</p>
        </div>
        <div className="right-sec">
          <div className="progress-bar">
            <div>
              <div>CSS</div>
            </div><span>80%</span>
          </div>
          <div className="progress-bar">
            <div>
              <div>HTML</div>
            </div><span>80%</span>
          </div>
          <div className="progress-bar">
            <div>
              <div>JavaScript</div>
            </div><span>60%</span>
          </div>
          
          <div className="progress-bar">
            <div>
              <div>React</div>
            </div><span>60%</span>
          </div>
         
      </div>
    </div>
    </div>
  )
}
export default About;