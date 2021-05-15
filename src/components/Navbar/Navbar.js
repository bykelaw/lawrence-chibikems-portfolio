import React,{useState} from 'react';
import "./Navbar.css";
const Navbar = () => { 
  const [useButton, setNav] = useState({
    nav: null,
    showClass:''
  })
  const showNavHandler = () => {
    if (useButton.nav === null) {
      return setNav({
        nav: destTopView,
        showClass:' show'
      })
    }
    else return setNav({
      nav: null,
      showClass:''
    })
  }
  const destTopView = (
  
    <nav >
    
      <div className={`Navbar${useButton.showClass}`}>
        <a className="home" href="#hm">Home</a>
        <a className="home" href="#ab">About</a>
        <a className="home" href="#pf">Portfolio</a>
        {/* <a className="home" href="#bg">Blog</a> */}
        <a className="home" href="#ct">Contact </a>
      </div>
    </nav>
  );
  
  
  return (<div className='nav-container'> 
    <button onClick={showNavHandler}className="more">&#8801;</button>
    {destTopView}
  </div>);
}
export default Navbar; 