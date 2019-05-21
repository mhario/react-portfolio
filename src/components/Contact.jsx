import React from 'react'

import { sharedStyles } from './styles/'

export default function Contact() {
  return (
    <section style={{...styles.component,
      ...styles.contact
    }}>
      <h2>Contact</h2>
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
    backgroundColor: 'lightgray'
  }
}
// const section = {
//     height: '500px',
//     backgroundColor: 'orange'
// }