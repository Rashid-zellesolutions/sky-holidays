import React, {useEffect, useState, useRef} from 'react'
import './index.css'
import ServiceFeatures from '../../utils/serviceFeatures';
import PackageDescription from '../../utils/packageDescription';
import ActivityLocation from '../../utils/activityLocation';
import PackageReview from '../../utils/packageReview';

// Book now Card

import BookingCard from '../../utils/bookingCard';

const PackageDetailStickySection = () => {  
    // const leftSectionRef = useRef(null);
    // const rightSectionRef = useRef(null);
    // const [rightSectionHeight, setRightSectionHeight] = useState('auto');

    // const updateRightSectionHeight = () => {
    //     if(leftSectionRef.current && rightSectionRef.current){
    //         const leftHeight = leftSectionRef.current.scrollHeight;
    //         const viewPort = window.innerHeight;

    //         if(leftHeight < viewPort){
    //             setRightSectionHeight(leftHeight + 'px');
    //         }else{
    //             setRightSectionHeight('auto')
    //         }
    //         console.log("Heigh of left section", leftHeight)
    //         console.log("viewport", viewPort)
    //     }
    // }
    // console.log("right ref", rightSectionRef)
    // console.log("right rection heigh",rightSectionHeight)

    // useEffect(() => {
    //     updateRightSectionHeight();
    //     window.addEventListener('resize', updateRightSectionHeight);

    //     return () => {
    //         window.removeEventListener('resize', updateRightSectionHeight)
    //     };
    // }, [])

    const leftSectionRef = useRef(null);
    const rightSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (leftSectionRef.current && rightSectionRef.current) {
        const leftSection = leftSectionRef.current;
        const rightSection = rightSectionRef.current;

        const rightSectionBottom = rightSection.getBoundingClientRect().bottom;
        const leftSectionBottom = leftSection.getBoundingClientRect().bottom;

        if (rightSectionBottom < window.innerHeight) {
          leftSection.style.position = 'absolute';
          leftSection.style.bottom = '0';
        } else {
          leftSection.style.position = 'sticky';
          leftSection.style.bottom = 'auto';
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // Handle resizing of the window

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

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