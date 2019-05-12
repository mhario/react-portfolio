import React from 'react';
import Nav from './components/Nav.jsx';
import Header from './components/Header.jsx';
import AboutMe from './components/AboutMe.jsx';
import Contact from './components/Contact.jsx';
import './App.css';

function App() {
  return (
    <div style={styles.app}>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

        {/* <button>About Me</button>
        <button>Experience</button>
        <button>Projects</button> */}
      <Header />
      <Nav />
      <AboutMe />
      {/* <Experience />
      <Skills />
      <Projects />
      <Upcoming> /> */}
      <Contact />
    </div>
  );
}

export default App;

const styles = {
  app: {
    textAlign: 'center'
  }
}