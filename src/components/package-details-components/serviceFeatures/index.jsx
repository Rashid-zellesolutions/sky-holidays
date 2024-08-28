import React from 'react'
import './index.css';
import { BsClock } from "react-icons/bs";
import { PiFootprints } from "react-icons/pi";
import { RiGroupLine } from "react-icons/ri";
import { IoLanguageOutline } from "react-icons/io5";

const ServiceFeatures = () => {
    const packageDetails = [
        {icon: BsClock, type: 'Duration', details: '0-7 , 0-8'},
        {icon: PiFootprints, type: 'Activity Type', details: 'Spacific Tour'},
        {icon: RiGroupLine, type: 'Group Size', details: '15 People'},
        {icon: IoLanguageOutline, type: 'Languages', details: 'English, Germen'},
    ]
  return (
    <div className='package-details-card-section'>
        {packageDetails.map((items, index) => (
            <div className='package-details-card'>
                <span className='package-card-icon'>
                    {<items.icon size={21} />}
                </span>
                <span className='package-card-details'>
                    <h3>{items.type}</h3>
                    <p>{items.details}</p>
                </span>
            </div>
        ))}
    </div>
  )
}

export default ServiceFeatures
