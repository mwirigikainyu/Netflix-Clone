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
      <div>
        <img src={props.logo} alt="netflix" width="200" height="50" />
        <ul>
          <li>Home</li>
          <li>Movies</li>
          <li>Shows</li>
          <li>My List</li>
        </ul>
      </div>
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
    </Nav>
  );
}

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  z-index: 2;
  transition: background-color 1s;
  img {
    margin: 10px 10px 0;
    vertical-align: middle;
  }
  ul {
    display: inline-block;
    list-style: none;
    margin-left: 20px;
    li {
      color: white;
      padding: 10px;
      display: inline-block;
    }
  }
  form {
    height: fit-content;
    padding: 10px;
    &:hover {
      cursor: pointer;
    }
    input {
      margin-left: 10px;
      padding: 10px;
      outline: none;
      border: 2px solid white;
      border-radius: 7px;
      color: white;
      background: rgba(0, 0, 0, 0.5);
      width: 300px;
    }
  }
`;
