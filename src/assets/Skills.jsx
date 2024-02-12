import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Skills.css";

 

export default function Skills(){
    return(
    <section id="Skills">
        <h1 className="Skillsicon"><FontAwesomeIcon icon={faLaptop} /> Skills</h1>
        <div className='container'>
            <div className='skillscard'>
               <ul>
                    <li>
                        <div className="card">
                         <div className="card-image"><img src='reactlogo.jpg'></img></div>
                            <div className="heading cardheding"><h2>React</h2></div>
                       </div>  
                    </li> 
                </ul>   
            </div>
            <div className='skillscard'>
               <ul>
                    <li>
                        <div className="card">
                         <div className="card-image"><img src='jslogo.jpg'></img></div>
                            <div className="heading cardheding"><h2>JavaScript</h2></div>
                       </div>  
                    </li> 
                </ul>   
            </div>
            <div className='skillscard'>
               <ul>
                    <li>
                        <div className="card">
                         <div className="card-image nodejs"><img src='nodejslogo.jpg'></img></div>
                            <div className="heading cardheding "><h2>Node.Js</h2></div>
                       </div>  
                    </li> 
                </ul>   
            </div>
            <div className='skillscard'>
               <ul>
                    <li>
                        <div className="card">
                         <div className="card-image"><img src='pngwing.com.png'></img></div>
                            <div className="heading cardheding"><h2>Express.Js</h2></div>
                       </div>  
                    </li> 
                </ul>   
            </div>
            <div className='skillscard'>
               <ul>
                    <li>
                        <div className="card">
                         <div className="card-image"><img src='mongodblogo2.png'></img></div>
                            <div className="heading cardheding"><h2>MongoDB</h2></div>
                       </div>  
                    </li> 
                </ul>   
            </div>
            <div className='skillscard'>
               <ul>
                    <li>
                        <div className="card">
                         <div className="card-image"><img src='pngwing.com (4).png'></img></div>
                            <div className="heading cardheding"><h2>HTML</h2></div>
                       </div>  
                    </li> 
                </ul>   
            </div>
            <div className='skillscard'>
               <ul>
                    <li>
                        <div className="card">
                         <div className="card-image"><img src='css.png'></img></div>
                            <div className="heading cardheding"><h2>React</h2></div>
                       </div>  
                    </li> 
                </ul>   
            </div>
            <div className='skillscard'>
               <ul>
                    <li>
                        <div className="card">
                         <div className="card-image"><img src='boot.png'></img></div>
                            <div className="heading cardheding"><h2>Bootstrap</h2></div>
                       </div>  
                    </li> 
                </ul>   
            </div>
            <div className='skillscard'>
               <ul>
                    <li>
                        <div className="card">
                         <div className="card-image"><img src='git.png'></img></div>
                            <div className="heading cardheding"><h2>Git</h2></div>
                       </div>  
                    </li> 
                </ul>   
            </div>
        </div>
    </section>
    )
}