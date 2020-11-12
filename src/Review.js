import React from "react"
import { FaQuoteRight } from "react-icons/fa"

const Review = (props) => {
  const { name, review, job, image } = props
  return (
    <div className="review">
      <div className="image-container">
        <div className="quote-container">
          <FaQuoteRight className="quote" />
        </div>
        <div className="image-circle">
          <img src={image} alt="user" />
          <div></div>
        </div>
      </div>
      <div className="info">
        <h3>{name}</h3>
        <h6>{job}</h6>
      </div>
      <p>{review}</p>
    </div>
  )
}

export default Review
