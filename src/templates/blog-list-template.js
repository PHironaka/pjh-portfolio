import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"

const BlogEntry = styled.div`
  display: grid;
  grid-template-columns: repeat(1,auto);
  grid-column-gap: 2em;
  padding: 1em 2em;
  border-bottom: 1px solid;
`


export default class BlogList extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    return (
      <Layout>
        {posts
        .filter(post => post.node.frontmatter.templateKey === 'blog-post')
        .map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return <BlogEntry key={node.fields.slug}><h2><Link to={node.fields.slug}>{title}</Link></h2><div>{node.excerpt}</div></BlogEntry>
        })}

        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            listStyle: 'none',
            padding: '1em 2em',
          }}
        >
          {!isFirst && (
            <Link to={`/blog/${prevPage}`} rel="prev">
              ← Previous Page
            </Link>
          )}
          {Array.from({ length: numPages }, (_, i) => (
            <li
              key={`pagination-number${i + 1}`}
              style={{
                margin: 0,
              }}
            >
              <Link
                to={`/blog/${i === 0 ? '' : i + 1}`}
                style={{
                  textDecoration: 'none',
                  color: i + 1 === currentPage ? '#ffffff' : '',
                  padding: '15px 20px',
                  margin: '20px 0 ',
                  display:'block',
                  background: i + 1 === currentPage ? '#000' : '',
                }}
              >
                {i + 1}
              </Link>
            </li>
          ))}
          {!isLast && (
            <Link to={`/blog/${nextPage}`} rel="next">
              Next Page →
            </Link>
          )}
        </ul>
      </Layout>
    )
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
          }
        }
      }
    }
  }
`