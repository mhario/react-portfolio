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
      <section style={{display:'inline-block', verticalAlign:'top',
        width: props.project.image ? '50%' : '100%'}}>
        {
          props.project.content
        }
      </section>
      {
        props.project.image
          ? <img src={props.project.image}
            alt="Screenshot"
            style={{
              display:'inline-block', width:'50%',
              maxHeight:'475px', maxWidth:'475px'
            }} />
          : ''
      }
      <footer
        style={styles.buttonBar}>
        <a href={props.project.githubUrl}>GitHub</a>
        {
          props.project.liveUrl
            ? <a href={props.project.liveUrl}>Live</a>
            : <span className="button" disabled>Live</span>
        }
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
    'ul': {
      listStyle: 'none'
    },
    'footer a': {
      flexGrow: 1,
      fontSize: '16px',
      fontWeight: 'bold',
      justifyContent: 'space-between',
      cursor: 'pointer',
      padding: '10px',
      ...sharedStyles.button
    },
    'footer span.button': {
      flexGrow: 1,
      fontSize: '14px',
      padding: '10px',
      color: '#555',
      cursor: 'not-allowed',
      backgroundColor: 'gainsboro',
    }
  }
}