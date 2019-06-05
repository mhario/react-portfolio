import React from 'react'

import { IHS } from './jobs/IHS.jsx'
import { FSA } from './jobs/FSA.jsx'
import { Ferris } from './jobs/Ferris.jsx'
import { Vizient } from './jobs/Vizient.jsx'
import { PNC } from './jobs/PNC.jsx'

import { Style } from 'radium'

import { sharedStyles, colors } from './styles'

export default class Experience extends React.Component {
  constructor() {
    super()
    this.state = {
      currentViewIndex: 0,
      jobs: [
        IHS,
        FSA,
        Ferris,
        Vizient,
        PNC
      ]
    }

    this.getActiveStyle = this._getActiveStyle.bind(this)
  }

  _getActiveStyle(testIndex) {
    return this.state.currentViewIndex === testIndex
      ? styles.active
      : null
  }

  render() {
    const currentIndex = this.state.currentViewIndex

    return (
      <article
        id="experience"
        style={{ ...styles.component, ...styles.experience }}>

        <Style
          scopeSelector="#experience"
          rules={ styles.componentObject }
        />
        <Style rules={ styles.experienceEntry } scopeSelector=".detail-view" />

        <header
          style={ styles.component.header }>
          <h2>Experience</h2>
        </header>

        <section style={ styles.experienceWindow }>

          <section
            id="list-pane"
            style={ styles.listPane }>
            <div
              style={styles.listBorder}
              role="presentation">
              <span style={ styles.label }>
                Current Work
              </span>
              <ul style={ styles.list }>
                <li style={ this.getActiveStyle(0) }>
                  <button
                    onClick={() => this.setState({ currentViewIndex: 0 })}
                  >IHS Markit</button>
                </li>
              </ul>
              <span style={ styles.label }>
                Coding Education
              </span>
              <ul style={ styles.list }>
                <li style={ this.getActiveStyle(1) }>
                  <button
                    onClick={() => this.setState({ currentViewIndex: 1 })}
                  >Fullstack Academy</button>
                </li>
              </ul>
              <span style={ styles.label }>
                Previous Work
              </span>
              <ul style={ styles.list }>
                <li style={ this.getActiveStyle(2) }>
                  <button
                    onClick={() => this.setState({ currentViewIndex: 2 })}
                  >Ferris State University</button>
                </li>
                <li style={ this.getActiveStyle(3) }>
                  <button
                    onClick={() => this.setState({ currentViewIndex: 3 })}
                  >Vizient</button>
                </li>
                <li
                  style={ this.getActiveStyle(4) }>
                  <button
                    onClick={() => this.setState({ currentViewIndex: 4 })}
                  >PNC</button>
                </li>
              </ul>
            </div>
          </section>
          {
            this.state.jobs[currentIndex]
              ? this.state.jobs[currentIndex]()
              : null
          }
        </section>
      </article>
    )
  }
}

const styles = {
  ...sharedStyles,
  listPane: {
    width: '40%',
  },
  experienceWindow: {
    display: 'flex',
    backgroundColor: colors.gray1,
    margin: '50px auto',
    width: '65vw', minWidth: '300px',
    height: '55vh', minHeight: '250px',
    border: `1px solid ${colors.gray2}`,
    borderRadius: '3px',
  },

  label: {
    display: 'block',
    padding: '5px 15px 5px 5px',
    color: colors.darkGray2,
    fontSize: '0.8rem',
  },
  active: {
    marginRight: '0px',
    // paddingRight: '10px',
    backgroundColor: 'orange'
  },
  listBorder: {
    borderRight: `1px solid ${colors.gray2}`,
  },

  // style component objects
  componentObject: {
    'h3': {
      marginTop: '0'
    },
    'ul': {
      listStyle: 'none',
      paddingLeft: 0,
      margin: 0,
      fontSize: '14px',

    },
    '#list-pane ul li': {
      textAlign: 'left',
      marginRight: '20px' // 'not active'
    },
    '#list-pane ul li button': {
      padding: '10px 10px 10px 20px',
      border: 'none',
      background: 'none',
      width: '100%',
      textAlign: 'left',
    },
    '#list-pane ul li:not(.disabled) button': {
      cursor: 'pointer',
    },
    '#list-pane ul li:not(.disabled):hover': {
      backgroundColor: colors.orange
    },
    '.details-view': {
      'overflow-y': 'scroll'
    },
    '.details-view ul li': {
      padding: '10px 20px 10px 10px',
      textAlign: 'left',

    }
  }
}
