import React from 'react'

import Radium from 'radium'
import Project from './Project'

import Upcoming from './Upcoming'

import caretRight from './images/chevron-right.svg'
import caretLeft from './images/chevron-left.svg'

import { sharedStyles } from './styles/'

class Projects extends React.Component {
  constructor() {
    super()
    this.state = {
      currentProjectViewIndex: 0
    }

    this.getPositionValue = this._getPositionValue.bind(this)
    this.viewNext = this._viewNext.bind(this)
    this.viewPrev = this._viewPrev.bind(this)
  }

  render () {
    return (
      <article
        id="projects"
        style={[
        styles.component,
        styles.projects ]}>

        <header
          style={ styles.component.header }>
          <h2>Projects</h2>
        </header>
        <section
          style={ styles.projectsSection }>
          <button style={[
            styles.navButtons, styles.prev ]}
            onClick={this.viewPrev}>
            <img
              style={ styles.navButtons.img }
              alt="Previous"
              src={caretLeft} />
          </button>
          <div
            style={ styles.projectViewWindow }
            role="presentation">
            {
              projects.map((proj, index) => {
                return <Project
                  position={ this.getPositionValue(index) }
                  key={ index }
                  project={ proj } />
              })
            }
          </div>
          <button style={[
            styles.navButtons, styles.next ]}
            onClick={ this.viewNext }>
            <img
              style={ styles.navButtons.img}
              alt="Next"
              src={ caretRight } />
          </button>
          </section>
          <Upcoming />
      </article>
    )
  }

  _getPositionValue(index) {
    // for positioning project cards;
    // -1 is past, scrolled to the left
    // 0 is in focus and centered
    // 1 is to the right, not seen yet
    if (index === this.state.currentProjectViewIndex) {
      return 0
    } else if (index >= this.state.currentProjectViewIndex) {
      return -1
    }
    return 1
  }

  _viewPrev() {
    const newVal = this.state.currentProjectViewIndex - 1;
    if (newVal > -1) {
      this.setState({ currentProjectViewIndex: newVal })
    }
  }

  _viewNext() {
    const newVal = this.state.currentProjectViewIndex + 1;
    if (newVal < 3) {
      this.setState({ currentProjectViewIndex: newVal })
    }
  }
}

export default Radium(Projects)

// TODO: move this into the content directory, when i build it
const projects = [
  {
    name: 'BiteSwipeLite',
    url: null,
    summaryContentArray: [
      'Originally built on React Native with a team of three from the bootcamp, '
    ]
    // img
  },
  {
    name: '3D Game of Life',
    summaryContentArray: [

    ]
  },
  {
    name: 'Codsworx',
    url: null,
    summaryContentArray: [

    ]
  }
]

const styles = {
  ...sharedStyles,
  projects: {
    paddingTop: 50
  },
  projectsSection: {
    whiteSpace: 'nowrap',
    margin: '50px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  projectViewWindow: {
    height: '40vh',
    position: 'relative',
    overflow: 'hidden',
    width: '75vw'
  },
  navButtons: {
    background: 'none',
    border: 'none',
    img: {
      width: 40
    }
  }
}