import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'
import Image from '../components/image'

class About extends React.Component {
  render() {
    const { data } = this.props
    const { social, title: siteTitle } = data.site.siteMetadata
    const oneDay = 24 * 60 * 60 * 1000 // hours*minutes*seconds*milliseconds
    const now = Date.now()
    const deathDay = new Date(2057, 2, 22)

    const daysTillDeath = Math.round(Math.abs((now - deathDay) / oneDay))

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`about`, `gatsby`, `javascript`, `react`]}
        />
        <h3 style={{ marginTop: 0 }}>Hi, I'm Dustin Firebaugh!</h3>

        <p>
          Below you will find the best picture ever taken of me. At the time of
          writing, it's probably 5 years old and maybe by the time of you
          reading it will be 10 years old. It's entirely possible that I no
          longer look like the person in that photo. Perhaps I no longer have a
          face at all. Perhaps my fantasies of becoming a linchpin in the human
          cyborg black markets has finally come to fruition -- which might
          afford me the oppurtunity to upload my human consciousness into an
          electronic vessel to live out the rest of time as a form of artificial
          intelligence. Perhaps... Wait, why are we here? ... oh yes, about
          me...
        </p>

        <p>
          I'm a software engineer, button masher, musician, maker/breaker of
          things, technologist, tinkerer, creator, and student of the world. I
          was born in 1988 (you can do the math) and, if I'm lucky, I will live
          for <strong>{daysTillDeath}</strong> more days. Whoa, I guess I better
          get to work.
        </p>

        <Image imgName="df_headshot.jpg" />
        <ul>
          <li>
            <a href={`https://twitter.com/${social.twitter}`}>
              Follow me on Twitter
            </a>
          </li>
          <li>
            <a href={`https://github.com/${social.github}`}>
              Find me on Github
            </a>
          </li>
        </ul>

        <Bio />
      </Layout>
    )
  }
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        social {
          twitter
          github
        }
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
