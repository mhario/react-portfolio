import React from 'react'

export default function Contact() {
    return (
        <section style={section}>
            <h2>Contact</h2>
            {/* <p>
                I'm pretty easy to get a hold of! 

            </p> */}
            <ul>
                <li>Broomfield, CO</li>
                <li>(734) 755 - 2807</li>
                <li>hario.mark@gmail.com</li>
            </ul>
        </section>
    )
}

const section = {
    height: '500px',
    backgroundColor: 'orange'
}