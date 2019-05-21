import React from 'react'
import Radium from 'radium'

import { colors } from './styles/'

class Nav extends React.Component {
  render() {
    return (
      <nav style={styles.nav}>
        {
          links.map(link => (
            <a
              href={`#${link.linkId}`}
              key={link.label}
              style={styles.nav.a}>
              {link.label}
              <span
                style={styles.spaceSaver}
                role="presentation">
                  {link.label}
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
  app: {
      textAlign: 'center'
  },
  nav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',

    position: 'sticky',
    top: '0',
    zIndex: '5',

    a: {
      flexGrow: 1,
      backgroundColor: 'black',
      color: colors.orange,
      padding: '10px',
      border: 'none',
      cursor: 'pointer',
      ':hover': {
          fontWeight: 'bold',
          transition: 'font-weight .5s ease'
      }
    }
  },
  spaceSaver: {
    // save space for hover-state so links don't move
    fontWeight: 'bold',
    display: 'block',
    height: 0,
    overflow: 'hidden'
  }
}

const links = [
  {
    label: 'About',
    linkId: 'about'
  },
  {
    label: 'Experience',
    linkId: 'experience'
  },
  {
    label: 'Tech Skills',
    linkId: 'skills'
  },
  {
    label: 'Projects',
    linkId: 'projects'
  },
  {
    label: 'Blog',
    linkId: 'blog'
  },
  {
    label: 'Contact',
    linkId: 'contact'
  },
]
