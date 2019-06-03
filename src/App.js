import React from 'react'
import Nav from './components/Nav.jsx'
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Tech from './components/Tech.jsx'
import Contact from './components/Contact.jsx'
// import Projects from './components/Projects.jsx'

import { StyleRoot } from 'radium'

import './App.css'

function App() {
  return (
    <StyleRoot>
      <div style={styles.app}>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Tech />
        {/* <Projects /> */}
        <Contact />
      </div>
    </StyleRoot>
  )
}

export default App

const styles = {
  app: {
    textAlign: 'center'
  }
}
