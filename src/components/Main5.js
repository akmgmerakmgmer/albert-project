import React from "react";
import Slider from "react-slick";
import person1 from '../images/person1.jpg'
const Main5 =({slider})=>{
    const sliderList = slider.map(slide=>{
        return(
            <div className="slider-content">
                <span className="span1 color-change">,,</span>
                <p>{slide.p}</p>
                <img src={slide.img}/>
                <h5>{slide.h5}</h5>
            </div>
        )
    })
    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay:true,
        autoplaySpeed:8000,
        swipe:true,
        swipeToSlide:true
      };
      return (
          <div className="main5" id="news">
            <div className="slider">
                <Slider {...settings}>
                    {sliderList}
                </Slider>
            </div>
        </div>
      );
}

export default Main5