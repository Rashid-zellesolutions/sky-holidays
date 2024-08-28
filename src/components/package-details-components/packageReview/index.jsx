import React from 'react'
import './index.css';
import { FaStar } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const PackageReview = () => {
    const reviewComment = [
        {comment: 'Excellent', count: 0},
        {comment: 'Very Good', count: 0},
        {comment: 'Avarage', count: 0},
        {comment: 'Poor', count: 0},
        {comment: 'Terrible', count: 0},
    ]
  return (
    <div className='package-reviews-main-container'>
                <h3>Reviews</h3>
                <div className='package-review-comment-container'>
                    <div className='package-review-count'>
                        <span className='package-review-range'>
                            <i><FaStar size={30} /></i>
                            <h3>0/5</h3>
                        </span>
                        <h3>Not Rated</h3>
                        <p>(0 Review)</p>
                    </div>
                    <div className='package-review-comment'>
                        {reviewComment.map((item, index) => (
                            <div key={index} className='review-comment'>
                                <p>{item.comment}</p>
                                <div className="separator"></div>
                                <p>{item.count}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='review-summery-container'>
                    <p className='review-summery'>0 review on this Activity - Showing 1 to 0</p>
                </div>
                <button className='write-a-review-btn'>
                    Write a Review <IoIosArrowDown size={25} />
                </button>
            </div>
  )
}

export default PackageReview
