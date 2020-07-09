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
  let width = window.innerWidth;
  
  return (
    <div className={customClass} onClick={onClick}>
      {width < 768 ? <CarouselNextSmall alt="Next arrow"/> : <CarouselNext alt="Next arrow"/>} 
    </div>
  );
}

const PrevArrow = (props) => {
  const { onClick, customClass } = props;
  let width = window.innerWidth;

  return (
    <div className={customClass} onClick={onClick}>
      {width < 768 ? <CarouselPreviousSmall alt="Previous arrow"/> : <CarouselPrevious alt="Previous arrow"/>} 
    </div>
  );
}

export default class WorksSlider extends Component {
  constructor(props) {
    super(props);
  }
  
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
      <div className="grid-container-narrow other-work">
        <h2>Other Work</h2>
        <Slider {...settings}>
          {this.props.pageContext.allWorks.nodes.map((node, id) => ( 
            <Link to={node.uri} key={node.id}>
              <figure className="image-hover-wrapper">
                <Img fluid={node.featuredImage.imageFile.childImageSharp.fluid} alt={node.title} /> 
                <figcaption>
                  {node.title}
                </figcaption>
              </figure>
            </Link>
          ))}
        </Slider>
      </div>
    );
  }
}
