import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import styled from "styled-components"

const PostTitle = styled.h1`
  font-size:1.5em;
  font-weight:400;
  margin:1em 0 0;
`

const MainSection = styled.div`
max-width:900px;
 p{
  margin:1em 0;
 }

 ul {
   margin:0 3em;
}




`

const PaginationSection = styled.ul`
   display:grid;
   grid-template-columns:1fr 1fr;
   list-style:none;
   grid-gap:2em;
   margin:3em 0;

   li {
     border:1px solid;
     padding:2em;
     text-align:center;
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


class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <PostTitle>{post.frontmatter.title}</PostTitle>
        <p
        >
          {post.frontmatter.date}
        </p>
        <MainSection dangerouslySetInnerHTML={{ __html: post.html }} />
       

        <PaginationSection
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </PaginationSection>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
