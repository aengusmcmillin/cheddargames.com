import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import blogStyles from "./blog.module.scss"

import Layout from "../components/layout"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div className={blogStyles.content}>
        <h2>Posts</h2>
        <ol>
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <li>
                <Link to={`/blog/${edge.node.fields.slug}`}>
                  <h2>{edge.node.frontmatter.title}</h2>
                  <p>{edge.node.frontmatter.date}</p>
                </Link>
              </li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}

export default BlogPage
