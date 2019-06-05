import React from 'react'
import Radium, { Style } from 'radium'

import { sharedStyles } from './styles/'

function Project(props) {
  return (
    <article
      className="project"
      style={[styles.card, positionObject(props.position)]}>
      <Style
        scopeSelector=".project"
        rules={styles.listStyling}
      />
      <header>
        <h3>{props.project.name}</h3>
      </header>
      {
        props.project.content
      }
      <footer
        style={styles.buttonBar}>
        <a
          href={props.project.githubUrl}>GitHub</a>
        <a
          disabled={props.project.liveUrl}
          title={props.project.liveUrl ? null : "Sorry, not quite ready yet!" }
          href={props.project.liveUrl}>Live</a>
      </footer>
    </article>
  )
}

function positionObject(positionValue) {
  switch (positionValue) {
    case -1: return { left: '105%' }
    case 0: return { left: '0px' }
    case 1: return { left: '-105%' }
    default: return null
  }
}

export default Radium(Project)

const styles = {
  ...sharedStyles,
  card: {
    border: '1px solid gray',
    borderRadius: '3px',
    display: 'inline-block',
    width: 'calc(100% - 2px)',
    position: 'absolute',

    transition: 'left 0.25s ease'
  },
  buttonBar: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0
  },

  listStyling: {
    'footer a': {
      flexGrow: 1,
      padding: '10px',
      ...sharedStyles.button
    }
  }
}
