import React from "react";

import './carousel.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import CarouselObject from './carousel_object';



function Carousel() {
    const projects = [
        {
            title: "COVID-19 Tracker",
            category: "Discord Bot",
            image: "",
            source: "",
        },
        {
            title: "COVID-19 Tracker",
            category: "Discord Bot",
            image: "",
            source: "",
        },
    ]


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const slides = () => 
        projects.map(project => {
            return (
                <div>
                    <CarouselObject project={project} key={project._key} />
                </div>
            )
        })



  return (
    <Slider {...settings}>
        {
            slides()
        }
                    
    </Slider>
  );
}

export default Carousel;
