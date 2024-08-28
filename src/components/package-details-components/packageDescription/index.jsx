import React from 'react'
import './index.css';

const PackageDescription = () => {
  return (
    <div className='package-details-description'>
        <h3>About This Activity</h3>
        <p>
            Dive into the history of ancient civilizations in the Antalya region with this full-day tour. 
            You’ll visit three significant ancient historical sites: the cities of Perge and Side, 
            and the Aspendos amphitheater ruins, where you can see ruins of many Greek and Roman structures. 
            The tour also visits the Manavgat Waterfall and Oymapinar Dam, where visitors can enjoy watching 
            the powerful rushing waters of the river.
        </p>
        <div className='package-details-list'>
            <ul>
                <li>Visit the ancient cities of Perge, Aspendos, and Side</li>
                <li>See the natural beauty of the Manavgat waterfall</li>
                <li>Learn about the history of the ancient civilizations in the region</li>
                <li>Includes complimentary roundtrip transportation and lunch</li>
            </ul>
        </div>
    </div>
  )
}

export default PackageDescription
