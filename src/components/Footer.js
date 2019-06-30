import React from 'react'
import Link from 'gatsby-link'
import logo from '../img/placeholer-logo.svg'
import styled from "styled-components"
import SourceCode from '../img/github-icon.svg'
import Twitter from '../img/twitter.svg'
import Instagram from '../img/instagram.svg'

const FooterItems = styled.div`
   display: grid;
   grid-template-columns: 1fr 2fr;
   border-top:1px solid;
   padding:2em;
    @media screen and (max-width: 800px) {
    grid-template-columns: 1fr ;
    grid-gap:1em;
    text-align:center;
    }

`

const Copyright = styled.small` 
    font-size:1em;
     @media screen and (max-width: 800px) {
      order:2;
    }
`

const FooterSocial = styled.ul` 
    margin: 0;
    display: grid;
    grid-template-columns: 50px 50px 50px;
    list-style: none;
    justify-content: right;
    text-align: right;

    @media screen and (max-width: 800px) {
      order:1;
      text-align:center;
      justify-content: center;
    }
  
`



const Footer = () => (
  <footer className="footer is-transparent">
      <FooterItems>
          <Copyright>
              © {new Date().getFullYear()} Peter Hironaka
          </Copyright>
          <FooterSocial>
            <li><a href="https://instagram.com/peterhironaka" target="_blank" rel="noopener"><img src={Instagram} alt="Instagram"/></a></li>
            <li><a href="https://twitter.com/peterhironaka" target="_blank" rel="noopener"><img src={Twitter} alt="Twitter"/></a></li>
            <li><a href="https://github.com/phironaka" target="_blank" rel="noopener"><img src={SourceCode} alt="Github"/></a></li>
          </FooterSocial>
      </FooterItems>
      
  </footer>


)

export default Footer
