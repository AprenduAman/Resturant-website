import React, { useState, useEffect } from "react";

import { HashLink as NavLink } from 'react-router-hash-link';
import styled from "styled-components";
import logo from "../image/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
export default function Navbar(props) {
  const [navbarState, setNavbarState] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavbarState(false));
  return (
    <>
      <Nav>
        <div className="logo">
          <NavLink to="/"><img src={logo} alt="Icon" /> </NavLink>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setNavbarState(true);
                }}
              />
            )}
          </div>
        </div>
        <ul className="links">
          <li>
            <NavLink smooth to='/#home' id="active">
            
              Home
            </NavLink>
          </li>
          <li>
           
          <NavLink smooth to ='/#slide'>Services</NavLink>
          </li>
          
          <li>
          <NavLink smooth to='/#menu'>Menu</NavLink>
          </li>
          {/* <li>
          <NavLink to='/register'>SignUp</NavLink>
          </li> */}
          
          
          <li>
          <NavLink to='/cart' >
          <i class="ri-shopping-cart-fill"></i>{' '}
          {props.countCartItems ? (
            <button id="count"className="badge">{props.countCartItems}</button>
          ) : (
            ' '
          )}
        </NavLink>{' '}
          </li>
          <li>
          <NavLink to='/login'><i id="user" alt="SignIn/SignUp" class="ri-user-fill"></i></NavLink>
          </li>
          
        </ul>
      </Nav>
      <ResponsiveNav state={navbarState} className={navbarState ? "show" : ""}>
        <ul>
          <li>
            <NavLink to="/#home"
              
              onClick={() => setNavbarState(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/#slide" onClick={() => setNavbarState(false)}>
             Services
            </NavLink>
          </li>
          
          <li>
            <NavLink to="/#menu" onClick={() => setNavbarState(false)}>
              Menu
            </NavLink>
          </li>
          
          <li>
          <NavLink to='/cart'>
          <i class="ri-shopping-cart-fill"></i>{' '}
          {props.countCartItems ? (
            <button id="count" className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </NavLink>{' '}
          </li>
        </ul>
      </ResponsiveNav>
    </>
  );
}

const Nav = styled.nav`
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+Khojki:wght@500&display=swap');
#user {
  font-size:3vh;
  font-size:2vw;
}
 font-family:Noto Serif Khojki;
  *{
    text-decoration: none;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4vw;
  .logo {
    img {
      margin-top: 1rem;
      cursor: pointer;
      width: 30%;
      height: auto;
    }
    .toggle {
      display: none;
    }
  }
  #count {
    border:none;
    background-color:orange;
    color:black;
    font-size:18px;

  }
  .links {
    NavLink:active {
      color: #f9c74f;
    }
    display: flex;
    list-style-type: none;
    gap: 2rem;
    
    li {
      a {
        color: #fc4958;
        font-weight: 600;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #f9c74f;
        }
        &:active {
          color: #f9c74f;
        }
      }
      
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .logo {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      top: 0;
      .toggle {
        display: block;
      }
    }
    .links {
      display: none;
    }
  }
`;
const ResponsiveNav = styled.div`
  position: fixed;
  right: -100vw;
  top: 0;
  z-index: 10;
  background-color: white;
  height: 100vh;
  width: ${({ state }) => (state ? "60%" : "0%")};
  transition: 0.3s ease-in-out;
  display: flex;
  opacity: 0;
  visibility: hidden;
  #count {
    border:none;
    background-color:orange;
    color:black;
    font-size:18px;
  }
  ul {
    list-style-type: none;
    width: 100%;
    margin-top: 3rem;
    li {
      width: 100%;
      margin: 1rem 0;
      margin-left: 2rem;
      a {
        text-decoration: none;
        color: #f9c74f;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #fc4958;
        }
      }
      &:first-of-type {
        a {
          color: #fc4958;
          font-weight: 900;
        }
      }
    }
  }
`;