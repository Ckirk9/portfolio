import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './Home'
import About from './About'
// import Contact from './Contact'
// import Projects from './Projects'
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <nav>
        <Link to="/">Home</Link> {' || '}
        <Link to="/about">About</Link> {' || '}
        {/* <Link to="/contact">Contact</Link> {' || '}
        <Link to="/projects">Work</Link>  */}
      </nav>
      {/* <h1>Christine Kirk</h1> */}
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      {/* <Route path='/contact' component={Contact}/>
      <Route path='/projects' component={Projects}/> */}
    </div>
    </Router>
  );
}

export default App;
