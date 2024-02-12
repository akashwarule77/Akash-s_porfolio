import "./project.css";
 
export default function Projects() { // Corrected function name to start with uppercase 'P'
    return (
        <section className="project">
            <h1 className="title">Projects</h1>
            <div className="container">
                <div className="card1" style={{ width: '18rem' }}> {/* Use an object for the style attribute */}
                    <img src="spotify.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Spotify Inspired Landing Page Clone</h5>
                        <p className="card-text">Designed and developed a visually appealing and responsive landing page inspired by Spotify.Implemented HTML and CSS to recreate the iconic Spotify look,featuring a dynamic hero section, curated playlists, and a user-friendly Navigation structure .
                        Focused on delivering an engaging user experience and honing front-end development skills in the process.
                        Applied advanced styling for a polished look, showcasing attention to
                        detail and dedication to front-end excellence. <br></br><a href="https://github.com/akashwarule77/Spotify_clone"> <b>Github link</b></a>
                        </p>
                    </div>  
                </div>
                <div className="card1" style={{ width: '18rem' }}> {/* Use an object for the style attribute */}
                    <img src="apple.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Apple Website Clone</h5>
                        <p className="card-text">Revitalized the Apple website through a meticulous redesign using HTML and CSS.Focused on achieving a responsive and visually stunning user interface, mirroring the clean and modern aesthetic of Apple's original site.
                         Implemented advanced layout techniques, dynamic animations, and a
                          mobile-friendly design for an immersive user experience.
                          A hands-on exploration of front-end development, showcasing my
                          commitment to precision and creativity. <br></br><a href="https://github.com/akashwarule77/Spotify_clone"> <b>Github link</b></a>
                        </p>
                    </div>  
                    
                </div>
                <div className="card1" style={{ width: '18rem' }}> {/* Use an object for the style attribute */}
                    <img src="homerent.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Home Listing Website : A Full-Stack</h5>
                        <p className="card-text">Designed and developed a comprehensive villa rental platform from
                        scratch using HTML, CSS, EJS JavaScript, Express.js, Node.js, and MongoDB.
                        Created an intuitive user interface for property listing, incorporating
                        advanced features like dynamic search, user authentication, and real-time updates.
                        Leveraged the power of Node.js and Express.js for a robust backend, while
                        MongoDB served as the database for seamless data management.
                        This project showcases my proficiency in full-stack development,
                        encompassing both front-end aesthetics and back-end functionality.
                          <br></br><a href="https://github.com/akashwarule77/Airbnbclone.git"> <b>Github link</b></a>
                        </p>
                    </div>  
                    
                </div>
                <div className="card1" style={{ width: '18rem' }}> {/* Use an object for the style attribute */}
                    <img src="weather-app.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Weather App</h5>
                        <p className="card-text">As part of my journey into web development and React, I undertook a project
                         to build a Weather App web page. Leveraging my beginner-level understanding of React and utilizing a 
                         weather API, I successfully created a user-friendly interface that displays real-time weather 
                         information for a specified city. This project allowed me to apply fundamental React concepts such as state 
                         management, component composition, and data fetching. Through this hands-on experience, I honed my skills in front-end development 
                         and gained valuable insights into building dynamic web applications. Additionally, this project served as a testament to 
                        my eagerness to learn and explore new technologies, 
                        setting a solid foundation for my future endeavors in web development.<br></br><a href="https://github.com/akashwarule77/Weatherapp.git"> <b>Github link</b></a>
                        </p>
                    </div>  
                    
                </div>
                
            </div>
        </section>
    );
}
