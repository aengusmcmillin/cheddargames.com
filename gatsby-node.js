const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

module.exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark') {
        let slug;
        if (
          Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
          Object.prototype.hasOwnProperty.call(node.frontmatter, "path")
        ) {
            slug = `/${node.frontmatter.path}`
        } else {
            slug = createFilePath({
                node,
                getNode,
                basePath: "content/blog"
            })
        }

        createNodeField({
            name: `slug`,
            node,
            value: `/blog${slug}`,
        })
    }
}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const result = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)
    result.data.allMarkdownRemark.edges.forEach(({node}) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/blog.js`),
            context: {
                slug: node.fields.slug
            },
        })
    })

}
