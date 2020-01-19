import React from 'react'
import { Link } from 'gatsby'
import NavBar from './NavBar'
import { scale } from '../utils/typography'

function Header({ title }) {
  return (
    <>
      <header
        style={{
          fontFamily: `Montserrat, sans-serif`,
          background: `rebeccapurple`,
        }}
      >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`,
            display: `flex`,
            alignItems: `center`,
          }}
        >
          <h1
            style={{
              margin: 0,
            }}
          >
            <Link
              to="/"
              style={{
                color: `white`,
                boxShadow: `none`,
                textDecoration: `none`,
              }}
            >
              {title}
            </Link>
          </h1>
          <NavBar />
        </div>
      </header>
    </>
  )
}

export default Header
