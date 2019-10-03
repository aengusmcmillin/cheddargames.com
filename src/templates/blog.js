import React, { Component } from "react"

import Layout from "../components/layout"
import Comments from "../components/comments"
import blogTemplateStyles from "./blog.module.scss"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        identifier
      }
      html
    }
  }
`

export default class Blog extends Component {
  constructor(props) {
    super(props)

    this.state = {
      error: false,
      comments: [],
    }
  }

  async componentDidMount() {
    const slug = this.props.data.markdownRemark.frontmatter.identifier;

    try {
      const response = await fetch(`https://cheddargames-comments-api.herokuapp.com/comments/${slug}`)
      const comments = await response.json()

      this.setState({ comments })
    } catch (error) {
      this.setState({ error: true })
    }
  }

  render() {
    const { comments, error } = this.state

    const slug = this.props.data.markdownRemark.frontmatter.identifier;

    return (
      <Layout>
        <h1>{this.props.data.markdownRemark.frontmatter.title}</h1>
        <p>{this.props.data.markdownRemark.frontmatter.date}</p>
        <div
          className={blogTemplateStyles.blogPostContent}
          dangerouslySetInnerHTML={{
            __html: this.props.data.markdownRemark.html,
          }}
        />
        <div>
          {!error && <Comments commentsList={comments} slug={slug} />}
        </div>
      </Layout>
    )
  }
}
