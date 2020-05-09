import React from 'react'

import Radium from 'radium'
import Project from './Project'

// import Upcoming from './Upcoming'

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
          <button
            disabled={ this._isOnFirst() }
            style={[
              styles.navButtons, styles.prev, this._isOnFirst() && styles.disabled ]}
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
          <button
            disabled={ this._isOnLast() }
            style={[
              styles.navButtons, styles.next, this._isOnLast() && styles.disabled ]}
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

  _isOnFirst() {
    return this.state.currentProjectViewIndex === 0;
  }
  _isOnLast() {
    return this.state.currentProjectViewIndex === projects.length - 1;
  }
}

export default Radium(Projects)

const styles = {
  ...sharedStyles,
  projects: {
    paddingTop: 50,
    margin: 'auto 10px'
  },
  projectsSection: {
    whiteSpace: 'nowrap',
    margin: '50px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  projectViewWindow: {
    height: '601px',
    position: 'relative',
    overflow: 'hidden',
    width: '75vw'
  },
  navButtons: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    img: {
      width: 40
    },
  }
}

// TODO: move this into the content directory, when i build it
const projects = [

  {
    name: `3D 'Game of Life'`,
    githubUrl: 'https://github.com/mhario/GoL-3D',
    liveUrl: 'http://gol-3d.s3-website-us-west-1.amazonaws.com',
    image: require('./images/3dgol.png'),
    content: 
      <section>
        <section>
          Conway's 'Game of Life', converted into 3D! 
          <h4>Technologies</h4>
          <p style={styles.dateLocation}>
            <span>ThreeJS</span>
            <span>React</span>
          </p>
          <h4>Technical Challenges</h4>
          <ul>
            <li>Integrating ThreeJS with React <small>(Interface, data, etc.)</small></li>
            <li>Game logic <small>(Integrating with ThreeJS, turn cycle calc)</small></li>
            <li></li>
          </ul>
          <h4>Coming Updates</h4>
          <ul>
            <li>Save board state</li>
            <li>Improve interface</li>
          </ul>
        </section>
      </section>
  },
  {
    name: 'BiteSwipeLite',
    githubUrl: 'https://github.com/mhario/biteswipelite',
    content: 
      <section>
        Originally built by with a team of three on React Native.<br />
        More recently, I've started to rebuild it as a React app. 
        <h4>Technologies</h4>
        <p style={styles.dateLocation}>          
          <span>ThreeJS</span>
          <span>React</span>
          <span>Express API</span>
        </p>
        <h4>Technical Challenges</h4>
        <ul>
          <li>Architecture <small>(Express API holds key for services)</small></li>
          <li></li>
        </ul>
        <h4>Coming Updates</h4>
        <ul>
          <li>Additional location hosts</li>
          <li>Improve interface</li>
          <li>Group Function</li>
        </ul>
      </section>
    // img
  },
  {
    name: 'Codsworx',
    githubUrl: 'https://github.com/mhario/codsworx',
    content: 
      <section>
        <h4>Technologies</h4>
        <p style={styles.dateLocation}>
          <span>React</span>
          <span>Postgres</span>
          <span>Express API</span>
        </p>
        <strong style={styles.spacer10}>This project is in its very early stages! More to come later.</strong>
        {/* <header>Coming Updates</header>
        <ul>
          <li>Everything</li>
          <li>Database practice</li>
        </ul> */}
      </section>
  },
  // {
  //   name: 'React Portfolio',
  //   content:
  //     <section>
  //       <header>Technologies</header>
  //       <p style={styles.dateLocation}>
  //         <span>React</span>
  //         <span>Radium</span>
  //       </p>
  //     </section>
  // }
]
