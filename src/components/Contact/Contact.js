import React from 'react';
import "./Contact.css";
const Contact = () => {
  return (
    <div className="Contact" id="ct">
      <h1 className="contact-title">Contact</h1>
      <p className="p-centered">Have a question or want to work together?</p>
      <div className="modal">
        <form action=""><input type="text" placeholder='Name'/>
        <input type="text" placeholder="Enter Email"/>
        <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"/>
          <input type="submit" />
        </form>
      </div>
      <div className="footer">
      <div className="center-top-link">
        <a href="#hm"><div className = "top-link" ></div></a>
      </div>
        <div className="contact-links">
          <div ><a href="https://github.com/bykelaw"><span><i className = "fa fa-github-square" ></i></span></a></div >
          < div > <a href="https://www.linkedin.com/in/lawrence-ughonu">< span > < i className = "fa fa-linkedin-square" > </i></span ></a></div >
          <div ><a href=""><span><i className = "fa fa-facebook-square" ></i></span></a></div >
          <div ><a href=""><span><i className = "fa fa-twitter-square" ></i></span></a></div >
        </div>
      </div>
    </div>
  )
}
export default Contact;