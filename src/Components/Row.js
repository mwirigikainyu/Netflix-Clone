import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { saveMovie } from "../Redux/Actions";
import styled from "styled-components";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/components/navigation/navigation.min.css";
import "swiper/swiper.min.css";

export default function Row(props) {
  SwiperCore.use([Navigation]);
  let [slides, setSlides] = useState("10");

  useEffect(() => {
    const screenSize = document.documentElement.clientWidth;

    if (screenSize >= 1900) {
      setSlides("9");
    } else if (screenSize >= 1700) {
      setSlides("8");
    } else if (screenSize >= 1400) {
      setSlides("7");
    } else if (screenSize >= 1200) {
      setSlides("6");
    } else if (screenSize >= 960) {
      setSlides("5");
    } else if (screenSize >= 750) {
      setSlides("4");
    } else if (screenSize >= 600) {
      setSlides("3");
    } else if (screenSize >= 450) {
      setSlides("2");
    } else {
      setSlides("2");
    }
  }, [slides]);

  return (
    <div>
      <RowHeader>{props.title}</RowHeader>
      <Swiper
        slidesPerView={slides}
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
