import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"
import Image from './Image'

const AboutMe = styled.div`
position: sticky;
top:0;
background:white;
z-index:1000;
border-left:1px solid;
height:100vh;
padding: 0 ;


@media screen and (max-width: 800px) {
  border-right:none;
position: relative;
  border-bottom:none;
  height:auto;
  z-index:1000;
  background:white;
  width:100%;
  }

`

const Peter = styled.div`
    position:relative;
    top:50px;
    max-width:150px;
    margin: 0 auto;
    @media screen and (max-width: 800px) {
      max-width:100%;
      top:0px;
    }    
    img {
        max-width:150px;
        max-height:150px;

        @media screen and (max-width: 800px) {
      max-width:100%;
      max-height:100%;
    }    

    }
`

const Copyright = styled.div`
small {
  font-size:.7em;
  margin-bottom:2em;
  position: relative;
  top:300px;
  padding:1em;
}
`

const FunFacts = styled.div`
    position:relative;
    margin: 1em auto;
    padding:0 ;
    top:100px;
    max-width:250px;

    @media screen and (max-width: 800px) {
      max-width:100%;
      top:0;

    }    
    
    div {
      border-top:1px solid;
      padding:1em;
    }
    a {
      margin: 10px 0;
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
    }
      
`
const AboutSidebar = () => (

  <AboutMe>
      <Peter>
        <Image />
      </Peter>
      <FunFacts>
        <div>
        <span>Got work?</span>
          <p> Feel free to drop my a line <a href="mailto:peter@peterhironaka.com">here</a>. My inbox is always open :) </p>
        </div>
        <div>
        <span>1</span>
          <p>906 combines the pleasure of low dose cannabis with the functional benefits of plant medicine. </p>
        </div>

        <div>
          <p>This site was built with <a href="https://www.gatsbyjs.org">Gatsby.js</a> and is deployed via <a href="https://netlify.com">Netlify</a>.</p>
        </div>

        
      </FunFacts>
      

  </AboutMe>
)

export default AboutSidebar
