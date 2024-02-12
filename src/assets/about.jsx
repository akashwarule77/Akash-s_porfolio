// About.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import "./about.css";

export default function About() {
    return (
        <section id="about">
          <h1 className="about"><FontAwesomeIcon icon={faAddressCard} /> About Me</h1>
            <div className="container">
                <div className="about-info">
                    <h3><b>I'm Akash warule</b></h3>
                    <p><b>FullStack Web Developer</b></p>
                    <p>I am a Full-Stack Web developer based in Nashik, India. I am an Information Technology undergraduate from Sanjivani collage of Engineering kopargoan. I am very passionate about improving my coding skills & developing applications & websites. I build WebApps and Websites using MERN Stack. Working for myself to improve my skills. Love to build Full-Stack clones.</p>
                    <p><span className='email'><b>Email: </b></span>akashwarule6725@gmail.com</p>
                    <p><span className='email'><b>Moblie no:  </b></span>9130583376</p>
                    <div className="about-photo">
                    <img src="/myphoto.jpeg" alt="Your Photo" />
                    </div>
                    <br></br>
                    <button class="button">
                    <a className="button-content" href='https://drive.google.com/file/d/19HLQ3Y1DkQ-AMcdwOSMMofTbY-gEOv3T/view?usp=sharing'><b>Resume</b></a>
                    </button>   
                 </div>
                
            </div>
        </section>
    );
}
