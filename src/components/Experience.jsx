import React from 'react'

import { Style } from 'radium'

import { sharedStyles, colors } from './styles'

export default class Experience extends React.Component {
  constructor() {
    super()
    this.state = {
      currentViewIndex: 0
    }

    this.getActiveStyle = this._getActiveStyle.bind(this)
  }

  _getActiveStyle(testIndex) {
    return this.state.currentViewIndex === testIndex
      ? styles.active
      : null
  }

  render() {

    return (
      <article
        id="experience"
        style={{ ...styles.component, ...styles.experience }}>

        <Style
          scopeSelector="#experience"
          rules={ styles.componentObject }
        />

        <header
          style={ styles.component.header }>
          <h2>Experience</h2>

          <section
            style={ styles.experienceWindow }>

          <section
            style={ styles.listPane }>
            <div role="presentation">
              <span style={ styles.label }>Recent Work</span>
              <ul
                style={ styles.list }>
                <li
                  style={ this.getActiveStyle(0) }
                  onClick={ () => this.setState({ currentViewIndex: 0 }) }
                >IHS Markit</li>
              </ul>
              <span style={ styles.label }>Older Positions</span>
              <ul>
                <li
                  style={ this.getActiveStyle(1) }
                  onClick={ () => this.setState({ currentViewIndex: 1 }) }
                >Vizient</li>
                <li 
                  style={ this.getActiveStyle(2) }
                  onClick={ () => this.setState({ currentViewIndex: 2 }) }
                >Vizient</li>
              </ul>
            </div>
              </section>
              <section
                style={ styles.detailsPane }>
                IHs lol
            </section>
          </section>

        </header>
      </article>
    )
  }
}

const styles = {
  ...sharedStyles,
  listPane: {
  },
  experienceWindow: {
    display: 'flex',
    backgroundColor: colors.gray1,
    margin: '20px auto',
    width: '70vw',
    border: `1px solid ${colors.gray2}`,
    borderRadius: '3px',
  },
  detailsPane: {
    flexGrow: 1,
    backgroundColor: 'grey',
    padding: '20px'
  },

  label: {
    display: 'block',
    padding: '5px 15px 5px 5px',
    color: colors.darkGray2
  },
  active: {
    marginRight: '0px',
    backgroundColor: colors.orange
  },

  // style component object 
  componentObject: {
    'ul': {
      // padding: '10px 0 20px 10px',
      listStyle: 'none',
      cursor: 'pointer',
      paddingLeft: 0,
      margin: 0,
    },
    'ul li': {
      padding: '10px 20px 10px 10px',
      textAlign: 'left',
      marginRight: '10px' // 'not active'
    },
    'ul li:hover': {
      backgroundColor: 'orange'
    }
  }
}
