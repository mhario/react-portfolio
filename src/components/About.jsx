import React from 'react'
import Radium, { Style } from 'radium'

import { sharedStyles } from './styles'

import { content } from './content'
// import oldFat from './images/oldFat.jpeg'
import newSkinny from './images/newSkinny.jpeg'

import { colors } from './styles/'

class AboutMe extends React.Component {
  render() {
    return (
      <article
        id="about"
        style={[styles.component,
          styles.aboutMe]}
        className="clearfix">

        <Style rules={styles.aboutMe} scopeSelector="#about" />

        <header>
          <h2>Hey there!</h2>
          <img
            alt="Me"
            style={styles.img}
            src={newSkinny}/>
        </header>
        { content.welcome.map((p, index) => <p key={index}>{p}</p>) }
        {/* later, add the more-details section as an expandable */}
        { content.welcome2.map((p, index) => <p key={index}>{p}</p>) }

      </article>
    )
  }
}

export default Radium(AboutMe)


const styles = {
  ...sharedStyles,
  aboutMe: {
    position: 'relative',
    paddingRight: '50%',
    'header': {
      textAlign: 'left'
    },
    'h2': {
      paddingLeft: '50px',
      color: colors.brightOrange
    },
    '@media (max-width: 550px)': {
      paddingRight: '100px',
      minWidth: '200px',
    },

    p: {
      textAlign: 'justify'
    },
  },

  img: {
    width: '30%',
    right: '10%', top: '20%',
    maxWidth: '350px',

    position: 'absolute',
    '@media (max-width: 550px)': {
      right: 'unset',
      position: 'relative',
      maxWidth: '100%',
      minWidth: '200px',
      width: 'auto',
      top: 'unset',
    },
  }
};
