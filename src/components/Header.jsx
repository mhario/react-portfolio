import React from 'react'
import Radium, { Style } from 'radium'

import splash from './images/splash.jpg'

import { sharedStyles } from './styles/';

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      isShown: false
    }
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isShown: true })
    }, 250)
  }
  
  render() {
    return (
      <header style={[styles.header,
        this.state.isShown]}>

        <Style rules={styles.contents} />

        <section style={styles.section}>
          <header>
            <h1 style={styles.component.header}>
              Mark Hario
            </h1>
          </header>
          <ul>
            <li>JavaScript Web Developer &</li>
            <li>Fullstack Software Engineer</li>
          </ul>
        </section>
      </header>
    )
  }
}


export default Radium(Header)

const headerColor = '#da8044'

const styles = {
  ...sharedStyles,
  // React inline style objects
  header: {
    height: '100vh',
    backgroundImage: `url(${splash})`,
    backgroundSize: 'cover',
    position: 'relative',
    textAlign: 'right',
    color: 'white'
  },
  section: {
    position: 'absolute',
    right: '5%', bottom: '15%',
  },

  // Style component Object
  contents: {
    ul: {
      listStyle: 'none',
      margin: 0,
    },
    'ul li': { padding: '10px 0' },
    h1: {
      margin: 0,
      color: headerColor,
      fontWeight: 'normal'
    }
  }
}