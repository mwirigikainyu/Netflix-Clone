import React from "react";
import styled from "styled-components";

function Cards(props) {
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  return (
    <Card>
      <img
        src={baseUrl + props.data.poster_path}
        alt={props.data.original_name}
      />
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  img {
    width: 200px;
    padding: 10px;
    border-radius: 15px;
    transition: ease-in-out 450ms;
    &:hover {
      cursor: pointer;
      transform: scale(1.2);
    }
  }
`;

export default Cards;
