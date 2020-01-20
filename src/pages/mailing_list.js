import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'

class MailingList extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`Dustin Firebaugh`, `gatsby`, `javascript`, `react`]}
        />

        <p>
          Sign up for my mailing list and I'll send you interesting content!
        </p>
        {/* email capture google form */}
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSd-T-EHpp14bzzjGHeElb5G_kLcbgK75hllHQGTdjus9lsYng/viewform?embedded=true"
          width="640"
          height="640"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </Layout>
    )
  }
}

export default MailingList

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
