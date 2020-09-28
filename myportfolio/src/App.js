import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import Home from './Home'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
import './App.css';

function App() {
  return (
    <Router>
    <div className="container">
        <div className="sidebar">
          <nav>
            <ul>
            <li><Link className="a" to="/about">About</Link></li>
            <li><Link className="a" to="/projects">Work</Link></li>
            <li><Link className="a" to="/Contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
        <div className="content">
          <section className="hero">
            <img src="profile-pic.jpg" alt=""/>
            <div className="hero-content">
              <About/>
              <Projects/>
            <a className="action-btn" href="#">Hire Me</a>
            </div>
          </section>
        </div>
        <div className="footer">
          <footer>
          <Contact/>
          </footer>
        </div>
    </div>
    </Router>
  );
}

export default App;
