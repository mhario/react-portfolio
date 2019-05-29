import React from 'react'

import { Style } from 'radium'

import { sharedStyles } from './styles'

export default function() {
  return (
    <article
      id="experience"
      style={ styles.component }>

      <Style
        scopeSelector="#experience"
        rules={ styles.componentObject }
      />

      <header
        style={ styles.component.header }>
        <h2>Experience</h2>

        <section
          style={ styles.listPane }>
            <ul
              style={ styles.list}>
              <li>IHS Markit</li>
              <li>Vizient</li>
              <li>Other</li>
            </ul>
            <section
              style={ styles.detailsPane }>
              IHs lol
            </section>
        </section>


      </header>
    </article>
  )
}

const styles = {
  ...sharedStyles,
  listPane: {
    backgroundColor: 'green',
    margin: '20px auto',
    width: '500px',
    display: 'flex'
  },
  list: {
    padding: '10px 0 20px 10px',
    listStyle: 'none',
    cursor: 'pointer',
    paddingLeft: 0
  },
  detailsPane: {
    flexGrow: 1,
    backgroundColor: 'grey',
    padding: '20px'
  },

  // style component object 
  componentObject: {
    'ul li': {
      padding: '10px 20px 10px 10px',
      textAlign: 'left',
      marginRight: '10px' // 'not active'
    },
    'ul li:hover': {
      backgroundColor: 'orange'
    }
  }
}
