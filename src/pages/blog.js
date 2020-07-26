import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql} from "gatsby"
import Link from 'gatsby-link'

const BlogPage = ({data}) => (
  <Layout>
    <SEO title="Home"/>
    <h1>Последние посты</h1>
    {data
      .allMarkdownRemark
      .edges
      .map(post => (
        <div key={post.node.id}>
          <h3 id="blog-title">{post.node.frontmatter.title}</h3>
      <small id="blog-posted-by">Написан {post.node.frontmatter.author}{','} {post.node.frontmatter.date}</small>

          <span id="excerpt">{post.node.excerpt}</span>
          <br/>
          <br/>
          <Link to={post.node.frontmatter.path}>Читать дальше</Link>
          <br/>
          <br/>
          <hr/>
        </div>
      ))}
  </Layout>
)

export const pageQuery = graphql `
    query BlogIndexQuery {
      allMarkdownRemark 
      (sort: {fields: frontmatter___date, order: DESC})
      {
        edges {
          node {
              id
            frontmatter {
              path
              title
              date
              author
            }
            excerpt
          }
          
        }
      }
    }
`

export default BlogPage
