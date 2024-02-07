import background from "../assets/background.png";
import background_2 from "../assets/background_2.png";
import background_3 from "../assets/background_3.png";
import React, { Component } from "react";
import Slider from "react-slick";

export default class Modal extends Component {
  render() {
    const settings = {
      autoplay: true,
      infinite: true,
      speed: 900,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className=" p-2">
        <Slider {...settings}>
          <img className="w-full h-full" src={background} />
        </Slider>
      </div>
    );
  }
}
