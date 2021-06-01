import React from "react"
import Link from "gatsby-link"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Template({ data }) {
  const post = data.markdownRemark

  if (frontmatter === null) {
    return null
  } else
    return (
      <Layout>
        <Link to="/blog">Назад</Link>
        <hr />
        <h1>{post.frontmatter.title}</h1>
        <h4 style={{ marginBottom: "5rem" }}>
          Написанно {post.frontmatter.author}
          {`, `}
          {post.frontmatter.date}
        </h4>
        <div
          dangerouslySetInnerHTML={{
            __html: post.html,
          }}
        />
      </Layout>
    )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`
