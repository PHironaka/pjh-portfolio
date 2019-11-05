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
    line-height:2.3;
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
