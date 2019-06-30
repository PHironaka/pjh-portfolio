import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Content, { HTMLContent } from '../components/Content'
import ProjectLinks from '../components/ProjectLinks'
import Layout from '../components/Layout'
import styled from "styled-components"
import Img from 'gatsby-image'

const ProjectListing = styled.div`
  display: grid;
  grid-template-columns: 1fr ;
  grid-column-gap: 2em;
  padding: 0 2em;

  p {
    margin: 1em 0;
  }
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

export const ProjectPostTemplate = ({
  content,
  contentComponent,
  description,
  image,
  project,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (

    <section className="section">
      {helmet || ''}
          <div className="project-content ">
           
          <ProjectListing>
            <div className="project-content--image">
              <Img fluid={image.childImageSharp.fluid} alt={title} name={title}/>
            </div>
            <h2 className="title">
              {title}
            </h2>
            
            <HyperLink>
             <li>
            <a href={project} target="_blank" rel="noopener noreferrer"> Visit Site </a>
            </li>
            </HyperLink>
            <div className="project-content--copy">

            <PostContent content={content} />
          </div>

           

        {tags && tags.length ? (
              <TagList>
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}> {tag}</Link>
                    </li>
                  ))}
                </TagList>

            ) : null}

        </ProjectListing>
             <ProjectLinks
          previous={PostContent.previous}
          next={PostContent.next}
        />



          </div>
       </section>

  )
}

ProjectPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  image: PropTypes.string,
  project: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

const ProjectPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout >

    <ProjectPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      image= {post.frontmatter.image}
      project={post.frontmatter.project}
      helmet={<Helmet title={`${post.frontmatter.title} | Project`} />}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
    />
    </Layout>

  )
}

ProjectPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ProjectPost

export const pageQuery = graphql`
  query ProjectPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
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