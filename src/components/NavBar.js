import React from 'react'
import { Link } from 'gatsby'

function NavBar() {
  const menuLinks = [
    {
      Text: 'Project-Blog',
      to: `/project-blog`,
    },
    {
      Text: 'Blog',
      to: `/blog`,
    },
    {
      Text: 'About',
      to: `/about`,
    },
  ]
  return (
    <nav style={{ marginLeft: `auto` }}>
      <ul style={{ listStyle: 'none', display: 'flex', margin: 0 }}>
        {menuLinks.map((link, i) => {
          return (
            <li
              key={i}
              style={{
                margin: 0,
              }}
            >
              <Link
                to={link.to}
                style={{
                  color: `white`,
                  boxShadow: `none`,
                  paddingLeft: 12,
                  textDecoration: `none`,
                }}
              >
                {link.Text}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default NavBar
