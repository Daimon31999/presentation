import React from 'react'
import Link from 'gatsby-link'
import {graphql} from 'gatsby'
import Layout from '../components/layout'

import { useRemarkForm } from 'gatsby-tinacms-remark'
import { usePlugin } from 'tinacms'


export default function Template({data}) {
  // const post = data.markdownRemark

  const [markdownRemark, form] = useRemarkForm(data.markdownRemark)
  usePlugin(form)


  return (
  <Layout>
      <Link to="/blog">Назад</Link>
      <hr/>
      <h1>{markdownRemark.frontmatter.title}</h1>
      <h4 style={{marginBottom: '5rem'}}>Написанно {markdownRemark.frontmatter.author}
      {`, `}
         {markdownRemark.frontmatter.date}</h4>
      <div dangerouslySetInnerHTML={{
        __html: markdownRemark.html
      }}/>

</Layout>
  )
}

export const postQuery = graphql `
    query BlogPostByPath($path: String!){
        markdownRemark(frontmatter: {path: {eq: $path}}){
          ...TinaRemark
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