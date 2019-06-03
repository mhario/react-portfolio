import React from 'react'

import { sharedStyles } from '../styles'

export function Vizient() {
  return (
    <article
      className="details-view"
      style={styles.experienceEntry}>
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
  ...sharedStyles
}
