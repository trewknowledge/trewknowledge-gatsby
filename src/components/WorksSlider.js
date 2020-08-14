import React, { Component } from 'react'
import Slider from 'react-slick'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import CarouselNext from "../assets/img/svgs/carousel-next.svg"
import CarouselPrevious from "../assets/img/svgs/carousel-previous.svg"
import CarouselNextSmall from "../assets/img/svgs/carousel-next-small.svg"
import CarouselPreviousSmall from "../assets/img/svgs/carousel-previous-small.svg"

const NextArrow = (props) => {
  const { onClick, customClass } = props;
  const handleKeyDown = (ev) => {
    if (ev.keyCode === 13) {
      onClick()
    }
  }
  
  return (
    <div className={customClass} onClick={onClick} onKeyDown={handleKeyDown} role="button" tabIndex='0'>
      <CarouselNextSmall className="hide-for-medium" alt="Next arrow"/>
      <CarouselNext className="show-for-medium" alt="Next arrow"/>
    </div>
  );
}

const PrevArrow = (props) => {
  const { onClick, customClass } = props;

  const handleKeyDown = (ev) => {
    if (ev.keyCode === 13) {
      onClick()
    }
  }

  return (
    <div className={customClass} onClick={onClick} onKeyDown={handleKeyDown} role="button" tabIndex='0'>
      <CarouselPreviousSmall className="hide-for-medium" alt="Previous arrow"/>
      <CarouselPrevious className="show-for-medium" alt="Previous arrow"/>
    </div>
  );
}

export default class WorksSlider extends Component {
  
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      nextArrow: <NextArrow customClass="slick-arrow carousel-next" />,
      prevArrow: <PrevArrow customClass="slick-arrow carousel-previous" />,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
    };
    return (
      <div className={this.props.pageContext.pageTitle === 'News' ? 'grid-container-narrow other-work pt0' : 'grid-container-narrow other-work'}>
        <h2>Other Work</h2>
        <Slider {...settings}>
          {this.props.pageContext.allWorks.map((item, id) => ( 
            <Link to={item.uri} key={item.id}>
              <figure className="image-hover-wrapper">
                <Img fluid={item.featuredImage.imageFile.childImageSharp.fluid} alt={item.title} /> 
                <figcaption>
                  {item.title}
                </figcaption>
              </figure>
            </Link>
          ))}
        </Slider>
      </div>
    );
  }
}
