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
          this.state.isShown]}>

        <Style
          scopeSelector="#header"
          rules={styles.contents} />

        <section style={styles.nameplate}>
          <BackdropFilter
            filter={'blur(5px)'}
            canvasFallback={true}>
            <header>
              <h1 style={[styles.component.header, styles.textRight, {marginBottom: 0}]}>
                <a href="#about">
                  Mark Hario
                </a>
              </h1>
            </header>
            <ul style={{paddingLeft: '20px'}}>
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
    color: 'white'
  },
  nameplate: {
    position: 'absolute',
    right: '5%', bottom: '15%',
    backdropFilter: 'blur(3px)',
    background:  'rgba(0,0,0,0.35)'
  },

  // Style component Object
  contents: {
    ul: {
      listStyle: 'none',
      margin: 0,
    },
    'ul li': { padding: '10px 0' },
    'h1 a': {
      margin: 0,
      color: headerColor,
      fontWeight: 'bold',
      textDecoration: 'none'
    },
  }
}