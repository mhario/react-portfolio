import React from 'react'

import { sharedStyles } from './styles/'

export default function() {
  return (
    <section>
      <header style={
        styles.component.header
      }>
        <h2>Upcoming</h2>
      </header>
    </section>
  )
}

const styles = {
  ...sharedStyles
}