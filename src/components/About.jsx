import React from 'react'
import Radium, { Style } from 'radium'

import { sharedStyles } from './styles';

// import oldFat from './images/oldFat.jpeg'
import newSkinny from './images/newSkinny.jpeg'

class AboutMe extends React.Component {
  render() {
    return (
      <article
        style={{...styles.component,
          ...styles.aboutMe}}
        className="clearfix">
        <Style rules={styles.aboutMe} />

        <header
          style={styles.component.header}>
          <h2>About</h2>
          <img
            alt=""
            src={newSkinny}/>
        </header>
        <p>
          My passion for coding began at a young age. I was maybe ten years old when I picked up a copy of Stroustrup’s own C++ text. Working through the book, I wrote my first linked list using a borrowed compiler and an ancient computer. But coding was always a hobby to me; since then, I have become a welding engineer and a robot programmer.
        </p><p>
          Having worked in the welding industry for nearly a decade, I’ve decided to return aggressively to full-time coding. I explain my thought process in greater detail here.
        </p><p>
          Now that I have made this pivot with my career, I am very excited to pursue opportunities in full stack software engineering and web development, or mobile app development.
        </p>
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

    img: {
      width: '40%',
      float: 'right',
      right: '50px', top: '150px',
  
      position: 'absolute'
    }
  }
};
