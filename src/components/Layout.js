import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ThemeProvider, createGlobalStyle } from "styled-components"
import { motion, AnimatePresence } from 'framer-motion'
import Header from './Header'
import Footer from './Footer'
import { StaticQuery, graphql } from "gatsby"
import pistol from '../img/space-pic.jpg'
import styled from 'styled-components'

const theme = {
  red: '#FF0000',
  black: '#000',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1200px',
};

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};

`
const PageContainer = styled.div`
  margin:0 auto;
  max-width:1000px;
  padding: 0 2em;
`


const GlobalStyle = createGlobalStyle`
 html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  html {
  overflow-x:hidden;
}

body {
    font-family: aktiv-grotesk-extended, sans-serif;
    font-weight: 300;
    margin:0;
    padding:0;
    color: #000;
    -webkit-text-size-adjust: 100%;
    -webkit-font-feature-settings: "kern" 1;
    -moz-font-feature-settings: "kern" 1;
    -o-font-feature-settings: "kern" 1;
    font-feature-settings: "kern" 1;
    font-kerning: normal;
    line-height: 1.5;
    font-size: 16px;
}

::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  font-family: aktiv-grotesk-extended, sans-serif;
  font-size: 16px;

}
::-moz-placeholder { /* Firefox 19+ */
  font-family: aktiv-grotesk-extended, sans-serif;
  font-size: 16px;

}
:-ms-input-placeholder { /* IE 10+ */
    font-family: aktiv-grotesk-extended, sans-serif;
    font-size: 16px;

}
:-moz-placeholder { /* Firefox 18- */
  font-family: aktiv-grotesk-extended, sans-serif;
  font-size: 16px;

}

h2 {
  font-weight:400;
  font-size:1.2em;
}

ul{
  padding:0;
}

.section {
  margin-top:2em;
}

a {
  color: ${props => props.theme.black};
  text-decoration:none;
}



img {
  max-width:100%;
}

.content .taglist {
   list-style: none;
  margin-bottom: 0;
  display:inline-flex;


  li {
margin: 1em 1em 1em 0 ;

a {
  border: 1px solid #eee;
  padding: 8px 15px;
}
  }
}

code {
  background:#eee;
  font-family:monospace;
}

.project-content {
  
  h2 {
  margin:0;
  }
}

.project-content--items {
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap:2em;
  @media screen and (max-width: 800px) {
grid-template-columns:1fr ;
grid-row-gap:2em;
}
}

.about-content {
  li {
  margin-left: 15px;
      list-style-type: circle;
  }
}

.about-section {
  display:grid;
  grid-template-columns:1fr 2fr;
   @media screen and (max-width: 600px) {
grid-template-columns:1fr ;
}

  img {
  max-width: 170px;
border-radius: 50%;
 @media screen and (max-width: 700px) {
max-width:100%;
   border-radius:0;
}
  }
}

.index-tags {
  text-align:right;
    @media screen and (max-width: 700px) {
  text-align:left;
   margin-top:10px;
}
  a {
  margin-right:10px;
  }
}

.index-content {
  display:grid;
  grid-column-gap: 2rem;
z-index: 10;
  line-height: 1;


&--link {
  display:grid;
  grid-template-columns: 1fr 1fr ;
  line-height: 1;
padding: 4px 0px;


 @media screen and (max-width: 700px) {
grid-template-columns: 1fr ;
   
}

p {
  text-align:right;



}
}




p {
  margin:0;
}
}

.post-content--title {
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2rem;
  margin-bottom:2em;

h2 {
  margin:0;
}

p {
  margin:0;
}

}





.content-post--project {
  display: grid;
grid-template-columns: 1fr 2fr;
grid-column-gap: 2em;
padding:2em;
border: 1px solid #eaecee;

 @media screen and (max-width: 900px) {
grid-template-columns: 1fr ;
padding: 0 5px;
border: none;

}
.content-post--project--title--links {
  
    display: grid;
    grid-template-columns: minmax(max-content,27px) 20px;
    grid-column-gap: 2em;
    margin-bottom: 2em;
    @media screen and (max-width: 900px) {
    grid-template-columns: 1fr ;
    }     

    h3 {
  margin:0;  
      @media screen and (max-width: 900px) {
margin:1em 0;
   
}
} 

p {
margin:0;
  }
}
   
}

.navMenu {
  transition: height 350ms ease-in-out, opacity 750ms ease-in-out;
  transition: all 0.5s ease;
  transition-duration: 1s;
}
.navbar-brand {
  padding:0 1em;
}
.navbar-menu {
  display:none;
  @media screen and (min-width: 800px) {
    display: grid;
    
  }
}
.navbar-start {
  display:grid;
@media screen and (max-width: 800px) {
    display:block;
    position: absolute;
    background: white;
    width: 100vw;
    height: 100vh;
    left: 0;
    z-index: 100000;
    overflow:hidden;
    }
  ul {
    padding: 0;
    padding-bottom: 0px;
    list-style: none;
    
    @media screen and (max-width: 800px) {
      display: block;
      padding: 0;
      width:100%;
      position: relative;
      top: 56px;
      font-size:1.5em;
      margin:2em ;
    }
    li {
      @media screen and (max-width: 800px) {
      margin:1em 0;
    }
    }
    a {
      text-decoration:none;
    }
   
  }
 
  
  .navbar-item {
    transition: all 0.3s ease 0s;
    position: relative;
    &:after {
      position: absolute;
      transition: .3s;
      content: '';
      width: 0;
      left: 50%;
      bottom: 0;
      top: 39px;
      height: 2px;
      background: #000;
  }
  &:hover {
    &:after {
      width: 100%;
      left: 0;
      }
  }
    @media screen and (max-width: 800px) {
      display:block;
      text-align: center;
      margin: 1em 0;
      text-transform: uppercase;
    }
    
  }
}
.navbar-menu{
	transition: height 1s ease-in-out, opacity 1s ease-in-out;
}
.navbar-menu.is-active {
  display: block;
	height: auto;
  opacity: 1;
  z-index:10000;
}
.navbar-burger {
  @media screen and (min-width: 800px) {
    display: none;
  }
    padding-top: 26px;
    color: #000;
    cursor: pointer;
    display: block;
    height: 3.25rem;
    position: absolute;
    right: 42px;
    top: 5px;
    width: 2.25rem;
    margin-left: auto;
    transition-delay: 2s;
    transition: height .35s ease-in-out,opacity .75s ease-in-out;
    &.is-active {
     transition-delay: 2s;
    transition: height .35s ease-in-out,opacity .75s ease-in-out;
    
    .icon-1 {
      opacity: 0;
      transform: rotate(40deg);
    }
  
    .icon-2 {
      top: 26px;
    -webkit-transform: rotate(-135deg);
    -moz-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    transform: rotate(-135deg);
    }
  
    .icon-3 {
      transform: rotate(-42deg);
  }
    }
    span {
      background-color: currentColor;
      display: block;
      height: 1px;
      left: calc(50% - 8px);
      position: absolute;
      -webkit-transform-origin: center;
      transform-origin: center;
      transition-duration: .2s;
      transition-property: background-color,opacity,-webkit-transform;
      transition-property: background-color,opacity,transform;
      transition-property: background-color,opacity,transform,-webkit-transform;
      transition-timing-function: ease-out;
      width:30px;
      &.icon-1 {
      transform: translateY(-8px);
      animation-delay: 0.2s;
    }
      &.icon-3 {
        transform: translateY(8px);
        animation-delay: 250ms;
      }
   
  }
}
`

const duration = 0.1

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: duration,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: duration },
  },
}

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <ThemeProvider theme={theme}>
          <StyledPage>
            <Helmet>
              <html lang="en" />
              <title>{data.site.siteMetadata.title}</title>
              <link rel="canonical" href="https://peterhironaka.com/" />
              <meta name="theme-color" content="#000000" />
              <meta property="og:url" content="https://peterhironaka.com" />
              <meta property="og:title" content="Peter Hironaka" />
              <meta property="og:locale" content="en_US" />
              <meta name="description" content="Peter Hironaka is a Freelance Web Developer based in Los Angeles." />
              <meta property="og:type" content="website" />
              <meta property="og:image" content={pistol} />
              <meta name="twitter:card" content="summary" />
              <meta name="twitter:site" content="@peterhironaka" />
              <meta name="twitter:title" content="Peter Hironaka" />
              <meta name="twitter:url" content="https://peterhironaka.com" />
              <meta name="twitter:description" content="Peter Hironaka is a Freelance Web Developer based in Los Angeles." />
              <meta name="twitter:image" content="https://peterhironaka.com/static/53ad586269110571a46ffbccce08171d/5d47c/pistol.jpg" />
              <link rel="icon" type="image/png" sizes="32x32" href={pistol} />
              <link rel="stylesheet" href="https://use.typekit.net/nsk3szt.css" />
            </Helmet>
            <GlobalStyle />
            <PageContainer>
              <Header />
              <AnimatePresence>
                <motion.main
                  key={location.pathname}
                  variants={variants}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                >{children}
                </motion.main>
                <Footer />
              </AnimatePresence>

            </PageContainer>

          </StyledPage>
        </ThemeProvider>

      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout