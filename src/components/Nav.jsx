import React from 'react'
import Radium from 'radium'


class Nav extends React.Component {
  render() {
    return (
      <nav style={styles.nav}>
        {
          links.map(link => (
            <button
              key={link.label}
              style={styles.nav.button}>
              {link.label}
            </button>
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

    button: {
      flexGrow: 1,
      padding: '10px',
      border: 'none',
      cursor: 'pointer',
      ':hover': {
          backgroundColor: 'red'
      }
    }
  }
}

const links = [
  { label: 'About' },
  { label: 'Projects' },
  { label: 'Blog' },
  { label: 'Contact' },
]
