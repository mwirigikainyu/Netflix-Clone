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
  width: 700px;
  padding: 40px;
  font-size: 20px;
  position: relative;
  top: 200px;
  z-index: 1;
  p {
    line-height: 1.5;
  }
  button {
    padding: 15px 30px;
    margin: 20px 10px;
    background-color: #00000078;
    color: white;
    border: none;
    &:hover {
      background-color: white;
      color: black;
    }
  }
`;

const Fade = styled.img`
  width: 100%;
  position: absolute;
  bottom: 180px;
`;
