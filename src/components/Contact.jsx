import React from 'react'

import { Style } from 'radium'

import { sharedStyles, colors } from './styles/'

export default function Contact() {
  return (
    <section
      id="contact"
      style={{...styles.component,
        ...styles.contact
      }}>
      <Style
        scopeSelector="#contact"
        rules={styles.contactList} />
      <h2 id="contact">Contact</h2>
      <ul>
        <li>Broomfield, CO</li>
        <li>(734) 755 - 2807</li>
        <li>hario.mark@gmail.com</li>
      </ul>
    </section>
  )
}

const styles = {
  ...sharedStyles,
  contact: {
    backgroundColor: colors.brightOrange,
    color: 'black'
  },

  contactList: {
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
