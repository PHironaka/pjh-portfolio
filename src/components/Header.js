import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"
import Search from "./Search"
import Nav from "./Nav"
import { StaticQuery } from "gatsby"

const Navigation = styled.header`

display:grid;
grid-template-columns:250px 1fr;
grid-gap:2em;

@media screen and (max-width: 800px) {
  grid-gap:0;
grid-template-columns: 1fr;

}

small {
  display: block;
  font-size:.7em;
  margin-bottom:2em;
}



 
`

const Title = styled.h1`
  margin: 1em 0 ;
  font-size:1em;
  font-weight:900;
  text-transform:uppercase;
  width: 100%;
  align-self:center;


`

const NavLinks = styled.div`
    margin: 1em 0;
    display:grid;
    grid-template-columns:1fr 1fr  ;

    ul {
      display:grid;
    grid-template-columns:auto auto auto ;

      list-style:none;
      grid-gap:1em;
    }

    li {
      align-self:center;

    }

    a {
      margin: 10px 0;
      position: relative;
      transition: .2s;
      z-index: 0;
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
const Header = () => (
  <StaticQuery
    query={graphql`
    query SearchIndexQuery {
      siteSearchIndex {
        index
      }
    }
  `}
    render={data => (

      <Navigation>
        <Title>
          <Link to="/" >
            Peter Hironaka
          </Link>
        </Title>

        <NavLinks>
          <Nav />
          <Search searchIndex={data.siteSearchIndex.index} />


        </NavLinks>
        {/* <small> © {new Date().getFullYear()}  </small> */}
      </Navigation>
    )}
  />
)

export default Header