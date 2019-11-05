import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Layout from '../components/Layout'
import ExternalLink from '../components/ExternalLink'
import styled from "styled-components"
import Helmet from 'react-helmet'
import { kebabCase } from 'lodash'

const ProjectPageContainer = styled.section`

  display: grid;

  h2 {
    font-size:2em;
    font-weight: 300;
    margin: 2em 0px;
    max-width:850px;
  }

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

.ui-marquee {
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  color: black;
  background-color: transparent;
  padding: 10px 0;
  position: absolute;
  top:0;
  width: 100%;
  z-index:1;

  @media screen and (max-width: 800px) {
    top:135px;
  }
}

.ui-marquee  span {
    display: inline-block;
    padding-left: 100%;
    animation: marquee 5s linear infinite;
    font-size: 2em;
    opacity:1;
    @media screen and (max-width: 800px) {
      animation: marquee 3s linear infinite;
  }
}

/* Make it move */
@keyframes marquee {
    0%   { transform: translate(0, 0); }
    100% { transform: translate(-100%, 0); }
}

`

const Projects = styled.div`
  border-top: 1px solid;

`


const ProjectPost = styled.div`
  padding: 1em 0;
  border-bottom:1px solid;

  &:last-child {
    border-bottom: none;
  }
`
const TagList = styled.ul`
   list-style: none;
    margin-bottom: 0;
    display: inline-flex;
    background: white;
z-index: 1000;
    li {
      margin: 1em 1em 1em 0;


      a {
      margin: 10px 0;
      position: relative;
      transition: .2s;
      z-index:0;
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

const ProjectTitle = styled.div`
  h3 {
    margin:10px 0;

    a {
      margin: 10px 0;
      position: relative;
      transition: .2s;
      z-index:1000;
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

const VisitSite = styled.div`
  display: grid;
  grid-template-columns:  120px 150px;
  grid-gap:1em;

  a {
    display: grid;
    grid-template-columns: 1fr 25px;
    margin:1em 0;
    p {
      margin:0;
    }
  }

`

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
          <Helmet
            titleTemplate="%s | Peter Hironaka"
          >
            <title>{`Projects`}</title>
          </Helmet>
      <ProjectPageContainer>

        <h2>Hello, my name is Peter Hironaka, I am a Freelance Front End Developer based in Los Angeles, CA. Here are a few things I've been working on:</h2>

       
        <Projects>
          {posts
            .filter(post => post.node.frontmatter.templateKey === 'project-post')
            .map(({ node: post }) => (
              <ProjectPost>
                <ProjectTitle>
                <h3>
                  <a className="post-content--external-link" href={post.frontmatter.project} target="_blank" rel="noopener noreferrer">
                    {post.frontmatter.title}
                    <ExternalLink />
                  </a>
                </h3>
                </ProjectTitle>   
                <div dangerouslySetInnerHTML={{
                __html: post.html,
                }}
              />
                  {post.frontmatter.tags && post.frontmatter.tags.length ? (
              <TagList>
                  {post.frontmatter.tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}> {tag}</Link>
                    </li>
                  ))}
                </TagList>

            ) : null}   
             
            </ProjectPost>
                  
            


            ))}
            </Projects>
      </ProjectPageContainer>

      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          html
          fields {
            slug
          }
          frontmatter {
            title
            image {
              childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
              }
            }
          }
            project
            tags
            templateKey
            date(formatString: "YYYY")
          }
        }
      }
    }
  }
`
