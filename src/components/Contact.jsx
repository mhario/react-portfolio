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

      <header
        style={ styles.component.header }>
        <h2>Contact</h2>
      </header>
      <ul>
        <li>Broomfield, CO</li>
        <li>(734) 755 - 2807</li>
        <li>hario.mark@gmail.com</li>
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
    'h2': {
      paddingLeft: '50px'
    },
    'ul': {
      width: '35%',
      margin: 'auto',
      listStyle: 'none'
    },
    'ul li': {
      color: 'white',
      textAlign: 'left',
      padding: '15px'
    }
  }
}