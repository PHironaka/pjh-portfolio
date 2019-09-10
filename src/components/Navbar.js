import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"

const Navigation = styled.nav`
@media (min-height: 550px) and (min-width: 800px) {
  position: sticky;
top:0;
background:white;
z-index:1000;
border-right:1px solid;
height:100vh;
}
@media (max-height: 550px)  and (max-width: 800px) {
  display:grid;
  grid-template-columns:1fr 2fr;
  grid-gap:2em;
  padding:0 2em;
  justify-self: left;
}

@media (max-width: 650px) {
  display:grid;
  grid-template-columns:1fr;
  grid-gap:2em;
  padding:0 2em;

}

small {
  display: block;
  font-size:.7em;
  margin-bottom:2em;
}

@media screen and (max-width: 700px) {
  border-right:none;
  border-bottom:none;
  height:auto;
  z-index:1000;
  background:white;
  }

.navbar-brand {

    @media screen and (max-width: 800px) {
      grid-gap:1em;
  }
}
 
`

const Title = styled.h1`
  margin: 1em 0 0;
  font-size:1em;
  font-weight:900;
  text-transform:uppercase;
  transform: rotate(90deg);
  width: 100%;
  position: relative;
  top:10%;

  @media screen and (max-width: 800px) {
  top:auto;
  transform: rotate(0);
  }


`

const NavLinks = styled.div`
    justify-self: end;
    margin: 1em 0;
    position: relative;
    top:50%;
    right: 35px;
    min-width: 229px;
    transform: rotate(90deg);

    @media screen and (max-width: 800px) {
  top:auto;
  transform: rotate(0);
  justify-self:start;
  }
  
    a {
      margin: 10px;
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
      
`
const Navbar = () => (

  <Navigation>
        <Title>
          <Link to="/" >
            Peter Hironaka
          </Link>
        </Title>

      <NavLinks>
        <Link to="/" itemprop="url">
          Projects
        </Link>
        <Link to="/blog" itemprop="url">
          Notes
        </Link>
        <Link to="/about" itemprop="url">
          About
        </Link>
  
      </NavLinks>
      {/* <small> © {new Date().getFullYear()}  </small> */}
  </Navigation>
)

export default Navbar