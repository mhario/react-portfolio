import React from 'react'

// import { colors } from './styles/'
import { sharedStyles } from '../styles'
// src/components/styles/index.js

export default function() {
  return (
    <article>
      <header>
        <h3>IHS Markit</h3>
      </header>
      <div
        styles={styles.listsWrapper}
        role="presentation">
        <ul>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
        </ul>
      </div>
    </article>
  )
}


const styles = {
  ...sharedStyles,
  listsWraper: {
    display: 'flex'
  }
}
