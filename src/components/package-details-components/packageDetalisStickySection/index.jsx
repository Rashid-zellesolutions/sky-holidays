import React, {useEffect, useState, useRef} from 'react'
import './index.css'
import ServiceFeatures from '../serviceFeatures';
import PackageDescription from '../packageDescription';
import ActivityLocation from '../activityLocation';
import PackageReview from '../packageReview';

// Book now Card

import BookingCard from '../bookingCard';

const PackageDetailStickySection = () => {  
    const leftSectionRef = useRef(null);
    const rightSectionRef = useRef(null);
    const [rightSectionHeight, setRightSectionHeight] = useState('auto');

    const updateRightSectionHeight = () => {
        if(leftSectionRef.current && rightSectionRef.current){
            // const leftHeight = leftSectionRef.current.getBoundingClientRect().height;
            // const rightHeigh = rightSectionRef.current.getBoundingClientRect().height;
            const leftHeight = leftSectionRef.current.scrollHeight;
            const viewPort = window.innerHeight;

            if(leftHeight < viewPort){
                setRightSectionHeight(leftHeight + 'px');
            }else{
                setRightSectionHeight('auto')
            }
            console.log("Heigh of left section", leftHeight)
            console.log("viewport", viewPort)
        }
    }
    console.log("right ref", rightSectionRef)
    console.log("right rection heigh",rightSectionHeight)

    useEffect(() => {
        updateRightSectionHeight();
        window.addEventListener('resize', updateRightSectionHeight);

        return () => {
            window.removeEventListener('resize', updateRightSectionHeight)
        };
    }, [])

  return (
    <div className='sticky-main-container'>
        <div className='sticky-left-section' ref={leftSectionRef}>
            <ServiceFeatures />
            <PackageDescription />
            <ActivityLocation />
            <PackageReview />
        </div>
        <div className='sticky-right-section' ref={rightSectionRef} style={{ height: rightSectionHeight }}>
            <BookingCard />
        </div>
    </div>
  )
}
export default PackageDetailStickySection