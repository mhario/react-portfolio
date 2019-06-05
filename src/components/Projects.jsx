import React from 'react'

import Radium from 'radium'
import Project from './Project'

// import Upcoming from './Upcoming'
import { Style } from 'radium'

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
            <Style rules={styles.shared} scopeSelector="#projects"/>
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
          {/* <Upcoming /> */}
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
  '.techs': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  navButtons: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    margin: '15px',
    img: {
      width: 40
    },
  },

  shared: {
    'ul': {
      listStyle: 'none',
      paddingLeft: '0'
    },
    'header': {
      fontWeight: 'bold',
      marginTop: '10px',
    }
  }
}

// TODO: move this into the content directory, when i build it
const projects = [
  {
    name: 'BiteSwipeLite',
    githubUrl: 'https://github.com/mhario/biteswipelite',
    liveUrl: null,
    content: 
      <section>
        Originally built by with a team of three on React Native. More recently, I've 
        <header>Technologies</header>
        <p style={styles.dateLocation}>
          <span>ThreeJS</span>
          <span>React</span>
          <span>Express</span>
        </p>
        <header>Technical Challenges</header>
        <ul>
          <li>Integrating ThreeJS with React</li>
          <li></li>
        </ul>
        <header>Coming Updates</header>
        <ul>
          <li>Save board state</li>
          <li>Improve interface</li>
        </ul>
      </section>
    // img
  },
  {
    name: `3D 'Game of Life'`,
    githubUrl: 'https://github.com/mhario/GoL-3D',
    liveUrl: 'https://gol-3d.herokuapp.com/',
    content: 
      <section>
        Conway's 'Game of Life', converted into 3D! 
        <header>Technologies</header>
        <p style={styles.dateLocation}>
          <span>ThreeJS</span>
          <span>React</span>
          <span>Express</span>
        </p>
        <header>Technical Challenges</header>
        <ul>
          <li>Integrating ThreeJS with React</li>
          <li></li>
        </ul>
        <header>Coming Updates</header>
        <ul>
          <li>Save board state</li>
          <li>Improve interface</li>
        </ul>
      </section>
  },
  {
    name: 'Codsworx',
    url: null,
    content: 
      <section>
        <header>Technologies</header>
        <p style={styles.dateLocation}>
          <span>React</span>
          <span>Postgres</span>
        </p>
        <strong>This project is in its very early stages! More to come later.</strong>
        {/* <header>Coming Updates</header>
        <ul>
          <li>Everything</li>
          <li>Database practice</li>
        </ul> */}
      </section>
  }
]
