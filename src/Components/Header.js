import React from "react";
import styled from "styled-components";

export default function Header(props) {
  return (
    <header
      style={{
        backgroundImage: `url(${props.image})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
        marginBottom: "10px",
        height: "80vh",
        width: "100%",
      }}
    >
      <HeaderDetails>
        <h1>{props.details.title || props.details.original_name}</h1>
        <button>Play</button>
        <button>My List</button>
        <p>{props.details.overview}</p>
      </HeaderDetails>
      <Fade src="./assets/fade.png" alt="bottom_fade" />
    </header>
  );
}

const HeaderDetails = styled.div`
  @media only screen and (max-width: 1000px) {
    width: 500px;
    font-size: 20px;
    p {
      font-size: medium;
    }
  }
  @media only screen and (max-width: 750px) {
    font-size: inherit;
    top: 300px;
    p {
      font-size: small;
    }
  }
  @media only screen and (max-width: 600px) {
    text-align: center;
    width: 100%;
    padding: 0 20px 20px;
  }
  @media only screen and (max-width: 460px) {
    top: 400px;
    font-size: small;
    padding: 0;
    p {
      display: none;
    }
  }
  width: 600px;
  padding: 40px;
  position: relative;
  top: 200px;
  z-index: 1;
  p {
    line-height: 1.5;
  }
  button {
    padding: 15px 30px;
    margin: 10px;
    background-color: white;
    border-radius: 5px;
    color: #00000078;
    border: none;
    &:hover {
      cursor: pointer;
      color: black;
    }
    @media only screen and (max-width: 460px) {
      padding: 10px 15px;
    }
  }
`;

const Fade = styled.img`
  @media (max-width: 768px) {
    -webkit-background-size: contain;
    -moz-background-size: contain;
    -o-background-size: contain;
    background-size: contain;
  }
  @media (max-width: 450px) {
    display: none;
  }
  width: inherit;
  height: inherit;
  position: absolute;
  top: 0;
`;
