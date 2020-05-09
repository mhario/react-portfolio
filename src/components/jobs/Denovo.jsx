import React from 'react'

import { sharedStyles } from '../styles'

export function Denovo() {
  return (
    <article
      className="details-view"
      style={styles.experienceEntry}>
      <header>
        <h3>Denovo Ventures, LLC</h3>
        <h4>Software Engineer - Innovation</h4>
        <p style={styles.dateLocation}>
          <span>Boulder, CO</span>
          <span>July 2019 / Current</span>
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
  'Performed agile development and maintenance for management console, including separate internal and external views, and numerous detail views and interface elements.',
  'Designed and built ‘user requests dashboard,’ a GitHub abstraction for our internal platform. Allowed for GitLab ticket creation and external visibility to non-technical users.',
  'Implemented several smaller full stack feature requests, requiring Mongoose schema upgrades, and integration with external APIs and Opensource libraries.',
  'Assumed scrum mastery, team leadership, and product ownership.',
];