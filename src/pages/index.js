import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import Image from '../components/image'

class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`Dustin Firebaugh`, `gatsby`, `javascript`, `react`]}
        />
        <h3>Hi, I'm Dustin Firebaugh!</h3>

        <p>
          This site serves as a place for me to collect my thoughts, document
          some personal projects, share knowledge, and a tool to help me learn.
        </p>
        <p>
          Check out the my <Link to="/about">about me</Link> and join my{' '}
          <Link to="/mailing_list">mailing list</Link>
        </p>
        <Image imgName="Caricature.jpg" />
        <Bio />
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
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
