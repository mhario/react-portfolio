import React from 'react'

import { sharedStyles } from '../styles'

const homepageUrl = 'https://www.ferris.edu/HTMLS/colleges/technolo/design-mfg/welding/homepage.htm'
const courseCatalogUrl = 'http://catalog.ferris.edu/catalog/2017-2018/program/5359'

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
          <span style={styles.rightAlign}>May 2012<br/>- August 2014</span>
        </p>
      </header>
      <p><a href={homepageUrl}>Program Homepage</a></p>
      <p><a href={courseCatalogUrl}>Program Outline</a></p>
    </article>
  )
}

const styles = {
  ...sharedStyles,
}
