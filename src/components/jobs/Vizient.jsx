import React from 'react'

import { sharedStyles } from '../styles'

export function Vizient() {
  return (
    <article
      className="details-view"
      style={styles.experienceEntry}>
      <header>
        <h3>Vizient Mfg Solutions</h3>
        <h4>Robot Programmer</h4>
        <p style={styles.dateLocation}>
          <span>Bettendorf, IA</span>
          <span>September 2014 - September 2016</span>
        </p>
      </header>
      <div
        styles={styles.listsWrapper}
        role="presentation">
        <ul style={styles.experienceEntry.ul}>
          {
            listStrings.map((str,index) => <li key={index}>{str}</li>)
          }
        </ul>
      </div>
    </article>
  )
}


const styles = {
  ...sharedStyles
}

const listStrings = [
  'Programmed Fanuc arc welding robots for customers in the agriculture industry, utilizing non-contact laser sensing, multi-pass welding, and coordinated motion.',
  'Evaluated tooling designs using Fanuc WeldPRO simulations and cycle-time estimates; suggested improvements to engineering designs to improve welding automation efficiency.',
  'Trained new personnel in robot programming and wrote training documentation for Fanuc WeldPRO software.',

]
