import React from 'react'

import oldFat from './images/oldFat.jpeg'

class AboutMe extends React.Component {
    render() {
        return (
            <article>
                <header>
                    <h2>About me</h2>
                    <img
                        alt=""
                        style={styles.aboutMe.img}
                        src={oldFat}/>
                </header>
            </article>
        )
    }
}

const styles = {
    aboutMe: {
        img: {
            width: '150px',
            float: 'right'
        }
    }
}

export default AboutMe