import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import styled from "styled-components"
import Img from 'gatsby-image'

const ProjectListing = styled.div`

  p {
    margin: 1em 0;
  }
`
const PostTitle = styled.h1`
  font-size:1.5em;
  font-weight:400;
  margin:1em 0 0;
`

const HyperLink = styled.ul`
      list-style:none;

      @media screen and (max-width: 800px) {
        grid-gap:1em;
    }

    li {
      margin: 1em 0;

      a {
        border:1px solid #eee;
      margin-right: 1em;
      text-align:center;
      padding:7px;
      transition: all .2s;
      color:black;
      background:white;
      display: block;

      &:hover {
      color:white;
      background:black;

      }
      }

    }
`
const TagList = styled.ul`
   list-style: none;
    margin-bottom: 0;
    display: inline-flex;

    li {
      margin: 2em 1em 2em 0;


      a {
        border: 1px solid #000;
        border-radius:10px;
        padding: 8px 15px;
        color:black;
        transition: all .2s;
        background:white;
        text-decoration:none;
        &:hover {
          color:white;
          background:black;
          }
      }
    }

`

class ProjectPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <>
        <PostTitle>{post.frontmatter.title}</PostTitle>
        <p
        >
          {post.frontmatter.date}
        </p>
        {/* <Img fluid={post.frontmatter.image.childImageSharp.fluid} alt={title} name={title}/> */}

        

        <ProjectListing dangerouslySetInnerHTML={{ __html: post.html }} />
       
      

        {post.frontmatter.tags && post.frontmatter.tags.length ? (
              <TagList>
                  {post.frontmatter.tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}> {tag}</Link>
                    </li>
                  ))}
                </TagList>

            ) : null}
       
      </>
    )
  }
}

export default ProjectPostTemplate

export const pageQuery = graphql`
  query ProjectPostBySlug($slug: String!) {
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
        date(formatString: "MMMM DD, YYYY")
        title
        description
        project
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tags
      }
    }
  }
`

