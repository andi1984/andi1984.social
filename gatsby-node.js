/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)
  const socialPostTemplate = path.resolve('src/templates/socialTemplate.js')
  const result = await graphql(`
    query allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/social/" } }
      ) {
        edges {
          node {
            fileAbsolutePath
            frontmatter {
              title
              date
              link
              path
            }
            rawMarkdownBody
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  
}