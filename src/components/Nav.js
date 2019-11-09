import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"
import classNames from 'classnames';

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

const MobileMenu = styled.div`
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
    
    &.active {
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

`

const NavContent = styled.div`
 @media screen and (max-width: 800px) {
      visibility:hidden;
      opacity:0;
      &.active {
    visibility:visible;
    opacity:1;
    height: 100%;
    position: absolute;
    background: white;
    width: 100%;
    top: 67px;
    z-index: 10000;

    ul {
      display:block;
      li {
        margin:2em 0;
        font-size:1.5em;
      }
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
  state = {
    isActive: false
  };

  handleClick = () => {
    this.setState(state => ({ isActive: !state.isActive }));
  };

  render() {
    const menuClass = classNames({
      menu: true,
      active: this.state.isActive
    });

    return (
      <Navigation role="navigation" aria-label="navigation">
        <div >
          <MobileMenu className={menuClass} onClick={this.handleClick} data-target="navMenu">
            <span class="icon-1"></span>
            <span class="icon-2"></span>
            <span class="icon-3"></span>
          
          </MobileMenu>
        </div>
        <NavContent  className={menuClass}  >
          <div >
            <ul>
              <li> <Link onClick={this.handleClick}  to="/" itemprop="url">
                Projects
        </Link></li>
              <li> <Link onClick={this.handleClick} to="/blog" itemprop="url">
                Notes
        </Link></li>
              <li> <Link onClick={this.handleClick} to="/about" itemprop="url">
                About
        </Link></li>
            </ul>

          </div>

        </NavContent>


      </Navigation>

    )
  }
}

export default nav