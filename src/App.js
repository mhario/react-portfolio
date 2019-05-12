import React from 'react';
import Nav from './components/Nav.jsx';
import Header from './components/Header.jsx';
import AboutMe from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Projects from './components/Projects.jsx';
import './App.css';

function App() {
  return (
    <div style={styles.app}>
      <Header />
      <Nav />
      <AboutMe />
      <Projects />
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