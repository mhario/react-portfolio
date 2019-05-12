import React from 'react'
import Radium, { Style } from 'radium'

import { sharedStyles } from './styles/'

class Projects extends React.Component {
  render () {
    return (
      <article style={{
        ...styles.component,
        ...styles.projects }}>
        <header style={styles.component.header}>
          Projects
        </header>

      </article>
    )
  }
}

export default Radium(Projects)

const styles = {
  ...sharedStyles,
  projects: {

  }
}