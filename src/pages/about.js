import React from 'react'
import { Link, graphql } from 'gatsby'

import AboutMe from '../components/AboutMe'
import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'

class About extends React.Component {
  render() {
    const { data } = this.props
    const { social, title: siteTitle } = data.site.siteMetadata

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`about`, `gatsby`, `javascript`, `react`]}
        />
        <h3 style={{ marginTop: 0 }}>Hi, I'm Dustin Firebaugh!</h3>

        <AboutMe />

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
