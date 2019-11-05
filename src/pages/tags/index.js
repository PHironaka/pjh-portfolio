import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Layout from '../../components/Layout'
import styled from "styled-components"

const TagList = styled.ul`
   list-style: none;
    margin-bottom: 0;
    display: block;
    padding: 0 ;

    li {
      margin: 1em 1em 1em 0;
      display: inline-block;
      position: relative;


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

const TagsPage = ({
  data: { allMarkdownRemark: { group }, site: { siteMetadata: { title } } },
}) => (
  <Layout>

  <section className="section">

    <Helmet title={`Tags | ${title}`} />
      <div >
        <div>
          <TagList>
            <h2>All Tags</h2>
            {group.map(tag => (
              <li key={tag.fieldValue}>
                <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </li>
            ))}
          </TagList>
        </div>
      </div>

  </section>
  </Layout>

)

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
