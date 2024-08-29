import React from 'react'
import './index.css';
import leftImage from '../../assets/package-detail/gallery-images/left-image.jpg'
import centerOne from '../../assets/package-detail/gallery-images/center-one.jpg';
import centerTwo from '../../assets/package-detail/gallery-images/center-two.jpg';
import rightOne from '../../assets/package-detail/gallery-images/right-one.jpg';
import rightTwo from '../../assets/package-detail/gallery-images/right-two.jpg';
import { TbCategory } from "react-icons/tb";

const Gallery = () => {
  return (
    <div className='gallery-main-container'>
        <div className='gallery-left-image-container'>
            <img src={leftImage} alt='left image' />
        </div>
        <div className='gallery-center-image-container'>
            <img src={centerOne} alt='img' />
            <img src={centerTwo} alt='img' />
        </div>
        <div className='gallery-right-images-container'>
        <img src={rightOne} alt='img' className='gallery-right-container-first-image'/>
        <img src={rightTwo} alt='img' className='gallery-right-container-second-image'/>
        </div>
        <button className='gallery-toggle-btn'>
            <TbCategory size={30} />
            All Photos
        </button>
    </div>
  )
}

export default Gallery
