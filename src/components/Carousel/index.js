import React, { Component } from 'react'
import Slider from 'react-slick'
import images from './images'
import '../../styles/components/CarouselStyle.css'

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <div className="slider-wrapper">
          <Slider {...settings}>
          {images.map((item) => (
            <div className="card">
              <div className="card-top">
                <img src={item.img} />
                <h1>{item.name}</h1>
              </div>
              <div className="card-bottom">
                <p>{item.writer}</p>
              </div>
            </div>
          ))}
          </Slider>
        </div>
  )
}

export default Carousel
