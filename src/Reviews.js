import React, { useState } from "react"
import Request from "./Request"
import Review from "./Review"
import { FcPrevious, FcNext } from "react-icons/fc"

const Reviews = () => {
  const [index, setIndex] = useState(0)

  const response = Request()

  const handleNext = () => {
    if (index < response.length - 1) {
      setIndex(index + 1)
    }
  }
  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1)
    }
  }
  const randomReview = () => {
    const randomNo = Math.floor(Math.random() * response.length)
    setIndex(randomNo)
  }

  if (typeof response === "object") {
    return (
      <div className="reviews-container">
        <h2>Our Reviews</h2>
        <div className="underline"></div>
        <Review {...response[index]} />
        <div className="controls">
          <FcPrevious onClick={() => handlePrev()} className="btn">
            prev
          </FcPrevious>
          <FcNext onClick={() => handleNext()} className="btn">
            next
          </FcNext>
        </div>
        <button className="random-review" onClick={() => randomReview()}>
          Random review
        </button>
      </div>
    )
  }
  return <h4>{response}</h4>
}

export default Reviews
