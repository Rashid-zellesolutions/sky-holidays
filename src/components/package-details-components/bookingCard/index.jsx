import React from 'react'
import './index.css';
import { FaStar } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

const BookingCard = () => {
    function getCurrentDate() {
        const now = new Date();
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const year = now.getFullYear();
        
        return `${month}/${day}/${year}`;
    }
    const currentDate = getCurrentDate();

    const bookingCardData = [
        {title: 'Adults', detail: 'Over 18+', minus: FiMinus, count: 0, plus: FiPlus},
        {title: 'Children', detail: 'Under 12', minus: FiMinus, count: 0, plus: FiPlus},
        {title: 'Infant', detail: 'Under 3', minus: FiMinus, count: 0, plus: FiPlus}
    ]
  return (
    <div className='book-now-card-main-container'>
                <div className='book-now-price-and-review-section'>
                    <span className='book-now-section'>
                        <p>From:</p>
                        <h3>82.00$</h3>
                    </span>
                    <span className='book-now-rating'>
                        <FaStar size={20} className='yellow-star' />
                        <h3>0</h3>
                        <p>(No Review)</p>
                    </span>
                </div>
                <div className='booking-details-section'>
                    <div className='date-section'>
                        <span>
                            <p>Date</p>
                            <p>{currentDate}</p>
                        </span>
                        <span className='arrow-down'>
                            <IoIosArrowDown size={25}  />
                        </span>
                    </div>
                    {bookingCardData.map((item, index) => (
                        <div className='people-count'>
                        <span className='containt-title'>
                            <p>Adults</p>
                            <p>Over 18+</p>
                        </span>
                        <span className='containt-count'>
                            <span>
                                <FiMinus size={20} />
                            </span>
                            <p>0</p>
                            <span>
                                <FiPlus size={20} />
                            </span>
                        </span>
                    </div>
                    ))}
                </div>
                <div className='booking-total'>
                    <h3>Total</h3>
                    <h3>0.00$</h3>
                </div>
                <button>Book now</button>
                <p className='book-now-select-one'>Please select at least one person</p>
            </div>
  )
}

export default BookingCard
