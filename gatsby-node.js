const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)

  const { data: blogData, errors: blogErrs } = await graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { fileAbsolutePath: { regex: "/^((?!project-).)*$/" } }
          limit: 1000
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
              }
              body
              fileAbsolutePath
            }
          }
        }
      }
    `
  )

  if (blogErrs) {
    return Promise.reject(blogErrs)
  }

  // Create blog posts pages.
  const blogPosts = blogData.allMdx.edges

  blogPosts.forEach((post, index) => {
    const previous =
      index === blogPosts.length - 1 ? null : blogPosts[index + 1].node
    const next = index === 0 ? null : blogPosts[index - 1].node

    createPage({
      path: `/blog${post.node.fields.slug}`,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })

  const { data: projectBlogData, errors: projectBlogErrs } = await graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { fileAbsolutePath: { regex: "/project-blog/" } }
          limit: 1000
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
              }
              body
              fileAbsolutePath
            }
          }
        }
      }
    `
  )

  if (projectBlogErrs) {
    return Promise.reject(projectBlogErrs)
  }

  // Create blog posts pages.
  const projectBlogPosts = projectBlogData.allMdx.edges

  projectBlogPosts.forEach((post, index) => {
    const previous =
      index === projectBlogPosts.length - 1
        ? null
        : projectBlogPosts[index + 1].node
    const next = index === 0 ? null : projectBlogPosts[index - 1].node

    createPage({
      path: `/project-blog${post.node.fields.slug}`,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
