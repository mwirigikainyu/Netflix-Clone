import React from "react";
import Cards from "./Cards";
import { saveMovie } from "../Redux/Actions";
import styled from "styled-components";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/components/navigation/navigation.min.css";
import "swiper/swiper.min.css";

export default function Row(props) {
  SwiperCore.use([Navigation]);

  return (
    <div>
      <RowHeader>{props.title}</RowHeader>
      <Swiper
        slidesPerView={10}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        className="mySwiper"
        style={{
          padding: "10px",
          display: "flex",
        }}
      >
        {props.data.map((res) => {
          return (
            <SwiperSlide key={res.id}>
              <Cards
                data={res}
                onClick={() => {
                  this.props.dispatch(saveMovie(res.id));
                }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

const RowHeader = styled.h2`
  margin-left: 20px;
`;
