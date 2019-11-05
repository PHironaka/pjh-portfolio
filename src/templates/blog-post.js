import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import styled from "styled-components"

const BlogContent = styled.div` 
  margin: 0 0 3em;

  ul {
    margin: 1em 0;
  }

  p {
    margin: 1em 0;
  }
  
  li {
    list-style-type: circle;
    margin-left: 15px;
  }
`

const BlogTitle = styled.div`
  margin-bottom:1em;
`

const Taglist = styled.ul` 
    margin-bottom: 0;

    li {
    list-style: none;

      margin: 1em 1em 2em 0;
      a {
        border: 1px solid #000;
        border-radius:10px;
        padding: 8px 15px;
        color:black;
        transition: all .2s;
        background:white;
        &:hover {
          color:white;
          background:black;
          }
      }

    }
`

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  date,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
        <div className="columns">

          <BlogContent>
             <BlogTitle >

            <h2 >
              {title}
            </h2>
             <p>{date}</p>
             </ BlogTitle >

            <p>{description}</p>
            <PostContent content={content} />


                        <div className="blog-container--credits">

            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <Taglist>
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </Taglist>
              </div>
            ) : null}
            </div>

        </BlogContent>

        </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  date: PropTypes.instanceOf(Date),
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>

    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      date={post.frontmatter.date}
      helmet={<Helmet title={`${post.frontmatter.title} | Blog`} />}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
    />
    </Layout>

  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`