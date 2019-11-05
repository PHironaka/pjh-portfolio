import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"

const Navigation = styled.nav`
align-self:center;

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

const activeStyle = {
  borderLeft: '1px dashed',
  color: 'white',
  borderRight: '1px dashed',
}



const nav = class extends React.Component {
  componentDidMount() {
    // Get all "navbar-burger" elements
   const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
   if ($navbarBurgers.length > 0) {
 
     // Add a click event on each of them
       $navbarBurgers.forEach( el => {
       el.addEventListener('click', () => {
 
         // Get the target from the "data-target" attribute
         const target = el.dataset.target;
         const $target = document.getElementById(target);
 
         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
         el.classList.toggle('is-active');
         $target.classList.toggle('is-active');
 
       });
     });
   }
 }


 render() {

   return (
    <Navigation role="navigation" aria-label="navigation"> 
        <div className="navbar-brand">
            <div className="navbar-burger burger" data-target="navMenu">
              <span class="icon-1"></span>
              <span class="icon-2"></span>
              <span class="icon-3"></span>
            </div>
          </div>
          <div id="navMenu" className="navbar-menu">
          <div className="navbar-start has-text-centered">

          <ul>
            <li> <Link to="/" itemprop="url">
              Projects
        </Link></li>
            <li> <Link to="/blog" itemprop="url">
              Notes
        </Link></li>
            <li> <Link to="/about" itemprop="url">
              About
        </Link></li>
          </ul>

          

          </div>
          
          </div>

       
    </Navigation>
      
  )}
}

export default nav