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
          some personal projects, and share knowledge.
        </p>
        <p>
          Check out the links in the top right of the page. I hope you don't get
          lost.
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
