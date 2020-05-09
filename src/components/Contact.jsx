import React from 'react'

import { Style } from 'radium'

import { sharedStyles, colors } from './styles/'

export default function Contact() {
  return (
    <article
      id="contact"
      style={{
        ...styles.contact
      }}>

      <Style
        scopeSelector="#contact"
        rules={ styles.contactList } />

      <header>
        <h2>Contact</h2>
      </header>
      <ul>
        <li><a href="https://www.linkedin.com/in/mark-hario-6b871285/">LinkedIn</a></li>
        <li>Louisville, CO</li>
        <li>(734) 755 - 2807</li>
        <li><a href="mailto:hario.mark@gmail.com">hario.mark@gmail.com</a></li>
      </ul>
    </article>
  )
}

const styles = {
  ...sharedStyles,
  contact: {
    backgroundColor: colors.brightOrange,
    color: 'black',
    marginLeft: '0', marginRight: '0',
    paddingTop: '50px', paddingBottom: '50px'
  },

  contactList: {
    'ul': {
      width: '35%',
      margin: 'auto',
      listStyle: 'none'
    },
    'ul li': {
      color: 'white',
      textAlign: 'center',
      padding: '15px'
    }
  }
}
