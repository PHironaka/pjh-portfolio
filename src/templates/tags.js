import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Layout from '../components/Layout'
import styled from "styled-components"

const TagSection = styled.div`
  display: grid;
  margin: 2em auto;
  padding: 0 ;
  background: white;
  display:inline-flex;
  z-index: 1000;

  a {
      margin: 10px 0;
      position: relative;
      transition: .2s;
      z-index: 1000;
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

const TagList = styled.ul`
   list-style: none;
    margin-bottom: 0;
    padding: 1em 0;
    background: white;
    z-index: 1000;

    li {
      margin: 1em 0;


  a {
      margin: 10px 0;
      position: relative;
      transition: .2s;
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
  
    }

`


class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(post => (
      <li key={post.node.fields.slug}>
          {post.node.frontmatter.title}
      </li>


    ))
    const tag = this.props.pathContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} project${
      totalCount === 1 ? '' : 's'
    } tagged with “${tag}”`

    return (
    <Layout>

      <TagSection>
        <Helmet title={`${tag} | ${title}`} />
            <div>
              <h3>{tagHeader}</h3>
              <TagList>
                {postLinks}
              </TagList>
                <Link to="/tags/">Browse all tags</Link>
            </div>
      </TagSection>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
