import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"
import SEO from '../components/Seo'

const BlogEntry = styled.div`
  display: grid;
  grid-template-columns: repeat(1,auto);
  grid-column-gap: 2em;
  padding: 1em 0;
  border-bottom: 1px solid;

  h2 {
    margin-bottom:1em;
  }

  a {
    margin: 10px 0;
    position: relative;
    transition: .2s;
    z-index: 0;
    &:after {
      position: absolute;
      transition: .2s;
      content: '';
      width: 0;
      bottom: 0;
      top: 10px;
      height: 6px;
      background: #f5d6db;
      z-index: -1;
      left: 0;

  }
  &:hover {
    &:after {
      width: 100%;
      }
    }
  }
  
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
        <SEO
        title="Blog"
      />
        {posts
        .filter(post => post.node.frontmatter.templateKey === 'blog-post')
        .map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return <BlogEntry key={node.fields.slug}><h2><Link to={node.fields.slug}>{title}</Link></h2><div>{node.excerpt}</div></BlogEntry>
        })}

        <ul
          style={{
            alignItems: 'center',
            listStyle: 'none',
            padding: '1em 0',
            textAlign: 'center',
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
                display:'inline-block',
              }}
            >
              <Link
                to={`/blog/${i === 0 ? '' : i + 1}`}
                style={{
                  textDecoration: 'none',
                  color: i + 1 === currentPage ? '#ffffff' : '',
                  padding: '7px 14px',
                  margin: '20px 0 ',
                  borderRadius:'50%',
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