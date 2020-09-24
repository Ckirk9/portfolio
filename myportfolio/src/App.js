import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      {/* <h1>Christine Kirk</h1> */}
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
    </Router>
  );
}

export default App;
