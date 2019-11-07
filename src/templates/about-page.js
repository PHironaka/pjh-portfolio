import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import styled from "styled-components"
import Helmet from 'react-helmet'



const AboutSection = styled.div`
  margin-bottom:4em;

  h2 {
    margin:2em 0;
  }

  ul {
    margin:0 3em;
 }

 li {
  list-style:circle;

 }



  p, h3 {
    margin:1em 0;
  }

 


  

  a {
    margin: 10px 0;
    position: relative;
    transition: .2s;
    line-height:2.3;
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


class AboutPageTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
        title={post.frontmatter.title}
      />
        {/* <Img fluid={post.frontmatter.image.childImageSharp.fluid} alt={title} name={title}/> */}



        {/* <PageContent className="about-content" content={content} /> */}
        <AboutSection dangerouslySetInnerHTML={{ __html: post.html }} />


      </Layout>
    )
  }
}

export default AboutPageTemplate

export const pageQuery = graphql`
  query AboutPageBySlug($slug: String!) {
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
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
