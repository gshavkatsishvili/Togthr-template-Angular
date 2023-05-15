import React from 'react'

import PropTypes from 'prop-types'

import './hero-content.css'

const HeroContent = (props) => {
  return (
    <div className="hero-content-hero-content">
      <div className="hero-content-header-container">
        <div className="hero-content-header">
          <h1 className="hero-content-heading">
            <span>Welcome to Solar Georgia</span>
            <br></br>
          </h1>
        </div>
        <p className="hero-content-caption">{props.Caption}</p>
      </div>
      <button className="hero-content-button button">
        <span>
          <span>See Portfolio</span>
          <br></br>
        </span>
      </button>
    </div>
  )
}

HeroContent.defaultProps = {
  Caption: 'Providing Photovoltaic Power Plant Installation Services',
}

HeroContent.propTypes = {
  Caption: PropTypes.string,
}

export default HeroContent
