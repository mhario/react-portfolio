import React from 'react'
import Radium, { Style } from 'radium'

import { sharedStyles } from './styles'

import { content } from './content'
// import oldFat from './images/oldFat.jpeg'
import newSkinny from './images/newSkinny.jpeg'

class AboutMe extends React.Component {
  render() {
    return (
      <article
        id="about"
        style={[styles.component,
          styles.aboutMe]}
        className="clearfix">

        <Style rules={styles.aboutMe} />

        <header
          style={styles.component.header}>
          <h2>Hey there!</h2>
          <img
            alt=""
            style={styles.img}
            src={newSkinny}/>
        </header>
        {
          content.welcome.map((p, index) => {
            return (
              <p key={index}>{p}</p>
            )
          })
        }

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

    p: {
      textAlign: 'justify'
    },
  },

  img: {
    width: '40%',
    right: '40px', top: '150px',
    // maxWidth: '320px',

    position: 'absolute',
    // '@media (max-width: 450px)': {
    //   right: 'unset',
    //   position: 'relative'
    // },
  }
};
