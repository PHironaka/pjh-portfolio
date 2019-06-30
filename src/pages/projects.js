import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import externalLink from '../img/external-link.svg'
import Layout from '../components/Layout'
import styled from "styled-components"
import Img from 'gatsby-image'
import Helmet from 'react-helmet'

const ProjectPageContainer = styled.section`

  display: grid;
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
}

.ui-marquee  span {
    display: inline-block;
    padding-left: 100%;
    animation: marquee 6s linear infinite;
    font-size: 3em;
    opacity:1;
}

/* Make it move */
@keyframes marquee {
    0%   { transform: translate(0, 0); }
    100% { transform: translate(-100%, 0); }
}

`

const Projects = styled.div`
  margin-top: 5em;
`


const ProjectPost = styled.div`
  display: grid;
  grid-template-columns: repeat(1,auto);
  grid-column-gap: 2em;
  padding: 1em 2em;
  border-bottom: 1px solid;

  @media screen and (max-width: 800px) {
  grid-template-columns: 1fr ;
  }

  &:last-child {
    border-bottom: none;
  }
`


const ProjectTitle = styled.div`
  h2 {
    margin:10px 0;
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

export default class ProjectPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout >
          <Helmet
            titleTemplate="%s | Peter Hironaka"
          >
            <title>{`Projects`}</title>
          </Helmet>
      <ProjectPageContainer>
        <Projects>
          {posts
            .filter(post => post.node.frontmatter.templateKey === 'project-post')
            .map(({ node: post }) => (
              <ProjectPost>
                  <Img fluid={post.frontmatter.image.childImageSharp.fluid} alt={post.frontmatter.title} name={post.frontmatter.title}/>
                <ProjectTitle>
                <h2>
                  <Link className="has-text-primary" to={post.fields.slug} target="_blank" rel="noopener noreferrer">
                    {post.frontmatter.title}
                  </Link>
                </h2>
                </ProjectTitle>   
                  <p>{post.excerpt}</p>    
                <VisitSite>
                <a className="post-content--external-link" href={post.frontmatter.project} target="_blank" rel="noopener noreferrer"> <p>Visit Site</p><img src={externalLink} alt="Visit Site"/></a>
                </VisitSite>


            </ProjectPost>
                  
            


            ))}
            </Projects>
      </ProjectPageContainer>
      </Layout>
    )
  }
}

ProjectPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query ProjectQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
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
