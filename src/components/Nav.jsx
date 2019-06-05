import React from 'react'
import Radium, { Style } from 'radium'

import { colors } from './styles/'

class Nav extends React.Component {
  render() {
    return (
      <nav
        id="nav"
        style={ styles  }>

        <Style rules={styles.links} scopeSelector="#nav" />
        {
          links.map(link => (
            <a
              href={`${link.linkId}`}
              key={ link.label }
              // style={[ styles.nav.a ]}
              className={ link.inverse ? 'inverse' : ''}>
              { link.label }
              <span
                style={ styles.spaceSaver }
                role="presentation">
                  { link.label }
              </span>
            </a>
          ))
        }
      </nav>
    )
  }
}

export default Radium(Nav)

const styles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',

  position: 'sticky',
  top: '0',

  zIndex: '5',
  spaceSaver: {
    // save space for hover-state so links don't move
    fontWeight: 'bold',
    display: 'block',
    height: 0,
    overflow: 'hidden'
  },


  links: {
    a: {
      flexGrow: 1,
      backgroundColor: 'black',
      color: colors.brightOrange,
      padding: '10px',
      border: 'none',
      cursor: 'pointer',
    },
    'a:hover': {
        fontWeight: 'bold',
        transition: 'font-weight .5s ease',
        color: 'orange'
    },
    'a.inverse': {
      backgroundColor: colors.orange,
      color: 'black',
      position: 'relative',
      transition: 'all 0.3s ease'
    },
    'a.inverse:hover': {
      boxShadow: '-2px 2px 11px 7px rgba(0, 0, 0, 0.55)',
      backgroundColor: 'orange',
      color: 'black',
    }
  }
}

const links = [
  {
    label: 'About',
    linkId: '#about',
    inverse: 0
  },
  {
    label: 'Experience',
    linkId: '#experience',
    inverse: 0
  },
  {
    label: 'Techs',
    linkId: '#tech',
    inverse: 0
  },
  {
    label: 'Projects',
    linkId: '#projects',
    inverse: 0
  },
  {
    label: 'Contact',
    linkId: '#contact',
    inverse: 0
  },
  {
    label: 'Resumé',
    linkId: 'HarioResume.pdf',
    inverse: 1
  }
]
