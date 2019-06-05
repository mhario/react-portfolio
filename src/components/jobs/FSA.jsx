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
      <ul style={styles.experienceEntry.ul}>
        <li>Sixteen-week immersive, attended remotely via video-chat virtual classroom.</li>
        <li><a href="https://www.fullstackacademy.com/curriculum">comprehensive curriculum</a></li>
        <li><a href={syllabusUrl}>Syllabus direct link</a></li>
      </ul>

    </article>
  )
}

const styles = {
  ...sharedStyles,
}
