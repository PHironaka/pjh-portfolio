import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ThemeProvider, createGlobalStyle } from "styled-components"
import Navbar from './Navbar'
import AboutSidebar from './AboutSidebar'
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
  display:grid;
  grid-template-columns:180px 2fr auto;

@media screen and (max-width: 800px) {
  grid-template-columns:1fr;
}
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
    overflow-x:hidden;
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
`
const Layout = ({ children }) => (
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
            <meta name="twitter:image" content="https://peterhironaka.com/static/space-pic.0271d58c.jpg" />
            <link rel="icon" type="image/png" sizes="32x32" href={pistol} />
            <link rel="stylesheet" href="https://use.typekit.net/nsk3szt.css" />
        </Helmet>
          <GlobalStyle />
          <PageContainer>
          <Navbar />
          <main>{children}</main>
          <AboutSidebar />
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
