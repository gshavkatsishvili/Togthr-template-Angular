import React from 'react'

import PropTypes from 'prop-types'

import './img-slider.css'

const ImgSlider = (props) => {
  return (
    <div className={`img-slider-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="img-slider-image"
      />
      <div className="img-slider-slide1">
        <div className="img-slider-container1">
          <div className="img-slider-container2">
            <svg viewBox="0 0 1024 1024" className="img-slider-icon">
              <path
                d="M658 708l-60 60-256-256 256-256 60 60-196 196z"
                className=""
              ></path>
            </svg>
          </div>
          <div className="img-slider-container3">
            <svg viewBox="0 0 1024 1024" className="img-slider-icon2">
              <path
                d="M366 708l196-196-196-196 60-60 256 256-256 256z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="img-slider-container4"></div>
      <div className="img-slider-container5"></div>
    </div>
  )
}

ImgSlider.defaultProps = {
  rootClassName: '',
  image_src: '/playground_assets/experience-1500h.png',
  image_alt: 'image',
}

ImgSlider.propTypes = {
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default ImgSlider
