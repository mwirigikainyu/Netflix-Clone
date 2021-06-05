import React from "react";
import styled from "styled-components";

function Genres(props) {
  return (
    <Tile>
      {props.data.map((res) => {
        return <span key={res.id}>{res.name}</span>;
      })}
    </Tile>
  );
}

const Tile = styled.div`
  padding: 10px 0;
  /* overflow-x: scroll; */
  display: flex;
  span {
    text-align: center;
    padding: 20px;
    border: 1px solid #444444;
    background-color: #1b1a1a9b;
    color: #ffffff;
    border-radius: 3px;
    font-size: 20px;
    margin-right: 5px;
    &:hover {
      cursor: pointer;
      color: #0000009b;
      background-color: #ffffff;
    }
  }
`;

export default Genres;
