import React from 'react'

import PropTypes from 'prop-types'

import './heading.css'

const Heading = (props) => {
  return (
    <div className={`heading-container ${props.rootClassName} `}>
      <h1 className="heading-heading">{props.Heading}</h1>
    </div>
  )
}

Heading.defaultProps = {
  Heading: 'nawvalebi',
  rootClassName: '',
}

Heading.propTypes = {
  Heading: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Heading
