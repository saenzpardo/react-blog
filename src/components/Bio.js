import React from 'react'
import styles from './Bio.module.css'
import { getGravatarURL } from '../utils/getGravatarURL'

function Bio(props) {
  let photoURL = getGravatarURL({
    email: "saenzpardoa@gmail.com",
    size: 56,
  })

  return (
    <div className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
      <img src={photoURL} alt="Me" />
      <p>
        My first attempt at creating {' '} place to 
        document my thoughts.
        <br />
        "I'm new and I'm not sure what to do with my hands!!" {' '}
        {' '}        
        <a href="saenzpardo.com/homework.html">Saenzpardo.com/homework.html</a> {' '}
        is a site I created for my children to use during the great COVID-19 
        shutdown of 2020. This was experimental, but still fun to build.  Send me a note
        with something you're working on!
      </p>
    </div>
  )
}

export default Bio
