import React, { useState } from 'react'
import Image from './image'

function AboutMe() {
  const [isShort, setShort] = useState(true)

  const oneDay = 24 * 60 * 60 * 1000 // hours*minutes*seconds*milliseconds
  const now = Date.now()
  const deathDay = new Date(2057, 2, 22)

  const daysTillDeath = Math.round(Math.abs((now - deathDay) / oneDay))

  const ToggleBtn = () => (
    <>
      <button
        style={{ marginBottom: '1em' }}
        onClick={() => setShort(!isShort)}
      >
        {isShort ? 'longer?' : 'shorter?'}
      </button>
    </>
  )

  if (isShort) {
    return (
      <>
        <ToggleBtn></ToggleBtn>
        <p>I currently work in Cyber Security building software.😉☕💻</p>
      </>
    )
  }
  return (
    <>
      <ToggleBtn></ToggleBtn>
      <p>
        Below you will find the best picture ever taken of me. At the time of
        writing, it's probably 5 years old and maybe by the time of you reading
        it will be 10 years old. It's entirely possible that I no longer look
        like the person in that photo. Perhaps I no longer have a face at all.
        Perhaps my fantasies of becoming a linchpin in the human cyborg black
        markets has finally come to fruition -- which might afford me the
        oppurtunity to upload my human consciousness into an electronic vessel
        to live out the rest of time as a form of artificial intelligence.
        Perhaps... Wait, why are we here? ... oh yes, about me...
      </p>

      <p>
        I'm a software engineer, button masher, musician, maker/breaker of
        things, technologist, tinkerer, creator, and student of the world. I was
        born in 1988 (you can do the math) and, if I'm lucky, I will live for{' '}
        <strong>{daysTillDeath}</strong> more days. Whoa, I guess I better get
        to work.
      </p>

      <Image imgName="df_headshot.jpg" />
    </>
  )
}

export default AboutMe
