import React from 'react'

import { sharedStyles } from '../styles/index.js'

export function PNC() {
  return (
    <article
      className="details-view"
      style={styles.experienceEntry}>
      <header>
        <h3>Pridgeon & Clay</h3>
        <h4>Welding Engineering Intern</h4>
        <p style={styles.dateLocation}>
          <span>Grand Rapids, MI</span>
          <span>May 2017 / Current</span>
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
  'Performed daily maintenance tasks in support of manufacturing activities, including changing weld wire liners and contact tips, and tooling maintenance.',
  'Completed a cell redesign project which improved material flow to reduce handling errors.',
  'Process improvements on robotic weld cells, including program point touch-up, operator training, and troubleshooting of welding fixtures.',
  'Investigated weld quality and throughput issues.',
  'Provided assistance with inventory tracking to ensure timely supply orders.',
]
