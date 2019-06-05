import React from 'react'

import { sharedStyles } from '../styles/index.js'

const syllabusUrl = 'https://www.fullstackacademy.com/assets/Full-time%20Syllabus%20-%20Fullstack%20Academy.pdf'

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
          <span style={styles.rightAlign}>September 2016<br />- February 2017</span>
        </p>
      </header>
      <p><a href="https://www.fullstackacademy.com/curriculum">Comprehensive curriculum</a></p>
      <p><a href={syllabusUrl}>Syllabus direct link</a></p>

    </article>
  )
}

const styles = {
  ...sharedStyles,
}
