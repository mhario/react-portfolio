import React from 'react'

import { Style } from 'radium'

import { sharedStyles } from './styles'

export default function() {
  return (
    <article
      style={styles.techs}
      id="tech">

      <Style
        scopeSelector="#tech"
        rules={ styles.componentObject } />

      <header
        style={ styles.component.header }>
        <h2>Technologies</h2>
      </header>
      <div
        style={ styles.wrapperDiv }
        role="presentation">
        <ul style={ styles.betterOnes }>
          <li>Vue / Vuex</li>
          <li>React / Redux</li>
          <li>HTML5, jQuery</li>
          <li>CSS3 / Sass, Bootstrap</li>
        </ul>
        <ul>
          <li>Node</li>
          <li>Express</li> 
          <li>Postgres</li>
          <li>Mocha / Chai</li>
        </ul>
        <ul>
          <li>Git</li>
          <li>GitHub / BitBucket</li>
          <li>TeamCity</li>
          <li>Jira</li>
        </ul>
      </div>
    </article>
  )
}

const styles = {
  ...sharedStyles,
  techs: {
    margin: '50px 0 0',
    backgroundColor: '#eee',
    color: '#333',
    padding: '20px 50px 20px',
  },

  wrapperDiv: {
    display: 'flex',
    flexDirection: 'row'
  },

  componentObject: {
    'ul': {
      listStyle: 'none',
      flexGrow: 1,
      padding: 0,
    },
    'ul li': {
      whiteSpace: 'nowrap',
      fontSize: '14px',
      padding: '20px'
    },
    'ul:first-child': {
      fontSize: '15px'
    },
  }, 
}
