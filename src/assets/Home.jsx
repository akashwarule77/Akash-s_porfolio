// Home.js

import React, { useEffect } from 'react';
import Typed from 'typed.js';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'; // Import icons from Font Awesome
import "./Home.css";

export default function Home() {
  useEffect(() => {
    // Initialize Typed.js
    const options = {
      strings: ['Web Developer', 'Front End Developer'],
      typeSpeed: 50,
      loop: true,
    };

    const typed = new Typed('#typed-text', options);

    // Cleanup
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home">
      <div className="container">
        <div className="left-content">
          <h1>Hi, there</h1>
          <h2>I'm Akash Warule</h2>
          <p>I am <span id="typed-text"></span></p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/akash-warule-69056b226" ><FaLinkedin /></a>
            <a href="https://www.instagram.com/akash_warule225/"><FaInstagram /></a>
            <a href="https://github.com/akashwarule77"><FaGithub /></a>
           </div>
        </div>
        <div className="right-content">
          <img className='akphoto' src='webdevlogo.jpg' alt='akash warule' />
        </div>
      </div>
    </section>
  );
}
