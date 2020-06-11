import React, { Component } from 'react'
import Slider from 'react-slick'
import { Link } from 'gatsby'
import plusIcon from '../images/plus-icon.svg'

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
      <div className="other-work">
        <h2>Other Work</h2>
        <Slider {...settings}>
          {this.props.pageContext.allWorks.nodes.map((node, id) => (
            <Link to={node.uri} key={id}>
              <figure>
                {node.featuredImage ? <img src={node.featuredImage.sourceUrl} alt={node.title} /> : null}
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
