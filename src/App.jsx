import './App.css';
import Navbar from './assets/Navbar';
import Home from './assets/Home';
import About from './assets/about';
import Skills from './assets/Skills';
import Projects from './assets/myproject';
import Footer from './assets/Footer';

function App() {
    return (
        <div className='main'>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Projects />  
            <Footer/>
        </div>
    );
}

export default App;
