import React from "react";
import styled from "styled-components";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/components/navigation/navigation.min.css";
import "swiper/swiper.min.css";

function Genres(props) {
  SwiperCore.use([Pagination]);

  return (
    <>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {props.data.map((res) => {
          return (
            <SwiperSlide key={res.id}>
              <Tile>
                <div>{res.name}</div>
              </Tile>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

const Tile = styled.div`
  @media only screen and (max-width: 800px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 500px) {
    font-size: 15px;
  }
  width: auto;
  padding: 10px 0;
  div {
    text-align: center;
    padding: 20px;
    border: 1px solid #444444;
    background-color: #1b1a1a9b;
    color: #ffffff;
    border-radius: 3px;
    margin-right: 5px;
    &:hover {
      cursor: pointer;
      color: #0000009b;
      background-color: #ffffff;
    }
  }
`;

export default Genres;
