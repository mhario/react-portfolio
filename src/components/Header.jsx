import React from 'react'
import Radium, { Style } from 'radium'
import BackdropFilter from 'react-backdrop-filter'

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
      <header
        id="header"
        style={[styles.header,
          this.state.isShown,
          styles.hideHorizontalScroll ]}>

        <Style
          scopeSelector="#header"
          rules={styles.contents} />

        <section style={styles.nameplate}>
          <BackdropFilter
            filter={'blur(5px)'}
            canvasFallback={true}>
            <header>
              <h1 style={[ styles.textRight, styles.header.myName ]}>
                <a href="#about">
                  Mark Hario
                </a>
              </h1>
            </header>
            <ul style={{paddingLeft: '40px'}}>
              <li>JavaScript Web Developer &</li>
              <li>Fullstack Software Engineer</li>
            </ul>
          </BackdropFilter>
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
    color: 'white',
    myName: [
      { marginBottom: 0, paddingRight: 0 }
    ]
  },
  nameplate: {
    position: 'absolute',
    right: '-50px', bottom: '15%',
    backdropFilter: 'blur(5px)',
    background:  'rgba(0,0,0,0.35)',
    boxShadow: '0px 1px 26px -3px black'
  },

  // Style component Object
  contents: {
    ul: {
      listStyle: 'none',
      margin: 0,
      paddingRight: '17vw', paddingBottom: '12px'
    },
    'ul li': { padding: '10px 0' },
    'h1 a': {
      paddingRight: '17vw',
      margin: 0,
      color: headerColor,
      fontWeight: 'bold',
      textDecoration: 'none'
    },
  }
}