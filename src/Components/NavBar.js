import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function NavBar(props) {
  const [search, handleSearch] = useState(false);
  const [nav, handleNav] = useState(false);

  const toggleSearchBar = () => {
    handleSearch(!search);
    console.log(search);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? handleNav(true) : handleNav(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        window.scrollY > 100 ? handleNav(true) : handleNav(false);
      });
    };
  }, []);

  return (
    <Nav className={`${nav && "nav_active"}`}>
      <img src={props.logo} alt="netflix" width="200" height="50" />
      <div>
        <ul>
          <li>Home</li>
          <li>Movies</li>
          <li>Shows</li>
          <li>My List</li>
        </ul>
        <form action="submit">
          <div onClick={toggleSearchBar}>
            <input
              className={`${search && "search_active"}`}
              type="search"
              name="search"
              id="search"
              placeholder="Search"
            />
          </div>
        </form>
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  @media only screen and (min-width: 600px) {
    display: flex;
    justify-content: space-between;
    div {
      display: inline-block;
      width: auto;
    }
  }
  @media only screen and (min-width: 800px) {
    div {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  }
  @media only screen and (max-width: 600px) {
    display: block;
    text-align: center;
    div {
      margin-top: 10px;
    }
  }
  position: fixed;
  width: 100%;
  padding: 10px;
  z-index: 2;
  transition: background-color 1s;
  img {
    margin: 10px 10px 0;
    vertical-align: middle;
  }
  ul {
    display: inline-block;
    list-style: none;
    li {
      color: white;
      padding: 10px;
      display: inline-block;
      margin-top: 10px;
    }
  }
  form {
    height: fit-content;
    padding: 10px;
    &:hover {
      cursor: pointer;
    }
    input {
      padding: 10px;
      outline: none;
      border: 2px solid white;
      border-radius: 7px;
      color: white;
      background: rgba(0, 0, 0, 0.5);
    }
    /* @media only screen and (max-width: 600) {
      visibility: hidden;
    } */
  }
`;
