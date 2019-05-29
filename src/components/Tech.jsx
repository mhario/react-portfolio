import React from 'react'

import { Style } from 'radium'

import { sharedStyles } from './styles'

export default function() {
  return (
    <article
      id="tech"
      style={ styles.component }>

      <Style
        scopeSelector="#tech"
        rules={ styles.componentObject } />

      <header
        style={ styles.component.header }>
        <h2>Technologies</h2>
      </header>
      <div
        style={styles.wrapperDiv}
        role="presentation">
        <ul>
          <li>Node / express</li>
          <li>React / Redux</li>
          <li>VueJS</li>
          <li>jQuery</li>
          <li>Postgres</li>
        </ul>
        <ul>
          <li>Mocha / Chai</li>
          <li>HTML5, Bootstrap</li>
          <li>CSS / Sass</li>
          <li>Web accessibility</li>
        </ul>
        <ul>
          <li>Git</li>
          <li>GitHub / BitBucket</li>
          <li>UI / UX Design</li>
          <li>Jira</li>
        </ul>
        <ul>
          <li>Data Structures</li>
          <li>Algorithms</li>
          <li>TeamCity</li>
        </ul>
      </div>
    </article>
  )
}

const styles = {
  ...sharedStyles,
  wrapperDiv: {
    display: 'flex',
    flexDirection: 'row'
  },


  componentObject: {
    'ul': {
      listStyle: 'none',
      flexGrow: 1
    }
  }
}
