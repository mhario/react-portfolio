import React from 'react'

import { Denovo } from './jobs/Denovo.jsx'
import { IHS } from './jobs/IHS.jsx'
// import { FSA } from './jobs/FSA.jsx'
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
        Denovo,
        IHS,
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
        <Style rules={ styles.experienceEntry } />

        <header
          style={{textAlign:'left'}}>
          <h2>Experience</h2>

          <section style={ styles.experienceWindow }>

            <section
              id="list-pane"
              style={ styles.listPane }>
              <div
                style={styles.listBorder}
                role="presentation">
                <span style={ styles.label }>
                  Software Engineering
                </span>
                <ul style={ styles.list }>
                  <li style={ this.getActiveStyle(0) }>
                    <button style={ this.getActiveStyle(0) } onClick={() => this.setState({ currentViewIndex: 0 })}
                    >Denovo</button>
                  </li>
                  <li style={ this.getActiveStyle(1) }>
                    <button style={ this.getActiveStyle(1) } onClick={() => this.setState({ currentViewIndex: 1 })}
                    >IHS Markit</button>
                  </li>
                </ul>
                {/* <span style={ styles.label }>
                  Coding Education
                </span>
                <ul style={ styles.list }>
                  <li style={ this.getActiveStyle(1) }>
                    <button
                      onClick={() => this.setState({ currentViewIndex: 1 })}
                    >Fullstack Academy</button>
                  </li>
                </ul> */}
                <span style={ styles.label }>Older Positions</span>
                <ul>
                  <li style={ this.getActiveStyle(2) }>
                    <button
                      disabled
                      onClick={() => this.setState({ currentViewIndex: 2 })}
                    >Vizient</button>
                  </li>
                  <li 
                    style={ this.getActiveStyle(3) }>
                    <button
                      disabled
                      onClick={() => this.setState({ currentViewIndex: 3 })}
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
        </header>
      </article>
    )
  }
}

const styles = {
  ...sharedStyles,
  listPane: {
    width: '30%',
  },
  experienceWindow: {
    display: 'flex',
    backgroundColor: colors.gray1,
    margin: '20px auto',
    width: '65vw', minWidth: '300px',
    height: '45vh', minHeight: '250px',
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
    paddingRight: '10px',
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
    'ul li': {
      textAlign: 'left',
      marginRight: '10px' // 'not active'
    },
    '#list-pane ul li button': {
      padding: '10px 10px 10px 20px',
      border: 'none',
      background: 'none',
      width: '100%',
      textAlign: 'left',
    },
    '#list-pane ul li button:not(:disabled)': {
      cursor: 'pointer',
    },
    '#list-pane ul li:not(.active) button:not(:disabled):hover': {
      backgroundColor: colors.orange
    },
    '.details-view': {
      'overflow-y': 'scroll'
    },
    '.details-view ul li': {
      padding: '10px 20px 10px 10px'
    }
  }
}
