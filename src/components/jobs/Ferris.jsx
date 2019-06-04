import React from 'react'

import { sharedStyles } from '../styles'

export function Ferris() {
  return (
    <article
      className="details-view"
      style={styles.experienceEntry}>
      <header>
        <h3>Ferris State University</h3>
        <h4>Bachelor's of Science,<br/>Welding Engineering Technology</h4>
        <p style={styles.dateLocation}>
          <span>Big Rapids, MI</span>
          <span>May 2012 - August 2014</span>
        </p>
      </header>
      <ul style={styles.experienceEntry.ul}>
        {
          listStrings.map((str,index) => <li key={index}>{str}</li>)
        }
      </ul>
    </article>
  )
}

const styles = {
  ...sharedStyles,
}

const listStrings = [
  ''
]
