import React from 'react'

import { sharedStyles } from '../styles/index.js'

export function FSA() {
  return (
    <article
      className="details-view"
      style={styles.experienceEntry}>
      <header>
        <h3>FullStack Academy</h3>
        <h4>Remote Immersive Cohort</h4>
        <p style={styles.dateLocation}>
          <span>New York, NY</span>
          <span>September 2016 - February 2017</span>
        </p>
      </header>
      <ul style={styles.experienceEntry.ul}>
        {/* {
          listStrings.map((str,index) => <li key={index}>{str}</li>)
        } */}
        <li>'Sixteen-week immersive, attended remotely via video-chat virtual classroom.'</li>
        <li>'Comprehensive curiculum, including:'</li>
      </ul> 

    </article>
  )
}

const styles = {
  ...sharedStyles,
}

const listStrings = [
  'Sixteen-week immersive, attended remotely via video-chat virtual classroom.',
  'Comprehensive curiculum, including:',
  ''
]
