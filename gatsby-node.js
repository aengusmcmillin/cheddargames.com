const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')

        createNodeField({
            node,
            name: 'slug',
            value: slug,
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
            path: `/blog/${node.fields.slug}`,
            component: path.resolve(`./src/templates/blog.js`),
            context: {
                slug: node.fields.slug
            },
        })
    })

}
