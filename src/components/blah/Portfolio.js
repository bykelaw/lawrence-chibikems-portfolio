import React from 'react';
import "./Portfolio.css";
import electricaStudio from "./../../assets/images/electric-studio.png";
import painOrder from "./../../assets/images/pain-order.png";
import calculator from "./../../assets/images/calculator.png";
const Portfolio = () => {
  return (
    <div className="Portfolio" id="pf">
      <h1 className="projects-title">Projects</h1>
      <div className='projects'>
        <a href="https://electrical-studio.herokuapp.com/" className="project--item"><img src={electricaStudio} alt="electrical-studio"/>
        <div className="cover"><h1>Title</h1><button>Learn More</button></div></a>
        <a href="https://law-ejs-express-app.herokuapp.com/" className="project--item"><img src={painOrder} alt="paint-order"/>
        <div className="cover"><h1>Title</h1><button>Learn More</button></div></a>
        <a href="https://lawscalculator-app.herokuapp.com/" className="project--item"><img src={calculator} alt="calculator"/>
        <div className="cover"><h1>Title</h1><button>Learn More</button></div></a>
      </div>
     </div>
   )
}
export default Portfolio;