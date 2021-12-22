import React from "react";

import './carousel.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import CarouselObject from './carousel_object';

import projects from './data/projects.json';



function Carousel() {
    const projects_ = projects;


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const slides = () => {
            return projects_.map(project => {
                if (project.front === 'true') {
                    return (
                        <div>
                            <CarouselObject project={project} key={project._key} />
                        </div>
                    )
                }
            })
    }



  return (
    <Slider {...settings}>
        {
            slides()
        }
                    
    </Slider>
  );
}

export default Carousel;
