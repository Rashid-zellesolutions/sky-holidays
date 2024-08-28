import React from 'react'
import './index.css';
import { FaStar } from "react-icons/fa";
import { IoArrowRedoOutline } from "react-icons/io5";
import heartIcon from '../../../assets/1077035 1.png'
import Gallery from '../gallery';

const ImageGallery = () => {
  return (
    <div className='image-gallery-main-container'>
        <div className='image-gallery-heading-and-icons'>
            <div className='image-gallery-heading-and-review'>
                <h3>Perge Aspendos Aquaduct Side with Waterfall</h3>
                <span className='image-gallery-rating'>
                    <FaStar size={20} className='yellow-star' />
                    <h3>0</h3>
                    <p>(No Review)</p>
                </span>
            </div>
            <div className='image-gallery-icons'>
                <p>
                    <IoArrowRedoOutline size={20} />
                </p>
                <button>
                    <img src={heartIcon} alt='heart' />
                </button>
            </div>
        </div>
        <Gallery />
    </div>
  )
}

export default ImageGallery
