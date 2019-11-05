import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import styled from "styled-components"
import Helmet from 'react-helmet'



const AboutSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom:4em;

  ul {
    margin:1em 0;
  }

  p {
    margin:1em 0;
  }

  h2 {
    margin:0 0 2em 0;
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



export const AboutPageTemplate = ({ title, image, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
          <Helmet
            titleTemplate="%s | Peter Hironaka"
          >
            <title>{`About`}</title>
          </Helmet>
             <AboutSection>
              <PageContent className="about-content" content={content} />
            </AboutSection>

    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout >

    <AboutPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      image={post.frontmatter.image}
      content={post.html}
    />
        </Layout>

  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
