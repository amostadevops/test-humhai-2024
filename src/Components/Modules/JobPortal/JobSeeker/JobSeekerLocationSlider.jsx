import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const settings = {
  className: "center",
  infinite: true,
  centerPadding: "40px",
  slidesToShow: 5,
  swipeToSlide: true,
  afterChange: function(index) {
    console.log(
      `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    );
  }};

function JobSeekerLocationSlider() {
  
  return (
    <div>
      <Slider {...settings} className='slider-demo my-2 text-center justify-content-center align-item-center'>
          <div className='main-title ms-2'>
            <h3>1</h3>
          </div>
          <div className='main-title ms-2'>
            <h3>2</h3>
          </div>
          <div className='main-title ms-2'>
            <h3>3</h3>
          </div>
          <div className='main-title ms-2'>
            <h3>4</h3>
          </div>
          <div className='main-title ms-2'>
            <h3>5</h3>
          </div>
          <div className='main-title ms-2'>
            <h3>6</h3>
          </div>
        </Slider>
    </div>
  )
}

export default JobSeekerLocationSlider