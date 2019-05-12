import React from 'react'
import Radium from 'radium'

import splash from './images/splash.jpg'

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
      <header style={styles.header}>
        <section style={styles.section}>
          <header>
            <h1 style={styles.section.h1}>
              Mark Hario
            </h1>
          </header>
          <ul style={styles.section.list}>
            <li style={styles.section.listItem}>
              JavaScript Web Developer &
            </li>
            <li style={styles.section.listItem}>
              Fullstack Software Engineer
            </li>
          </ul>
        </section>
      </header>
    )
  }
}


export default Radium(Header)

const headerColor = '#da8044'

const styles = {
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
    right: '5%',
    bottom: '15%',
    h1: {
      margin: 0,
      color: headerColor,
      fontWeight: 'normal'
    },
    list: {
      listStyle: 'none',
      margin: 0,

    },
    listItem: {
      padding: '10px 0'
    }
    
  }
}