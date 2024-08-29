import React from 'react'
import './index.css';
import { FiTag } from "react-icons/fi";

const Tags = () => {
    const tagsData = [
        {icon: FiTag, tag: "Duration", itemOne: '0-7 hours', itemTwo: '0-8 hours'},
        {icon: FiTag, tag: "Language", itemOne: 'English', itemTwo: 'Germen'}
    ]
  return (
    <div className='package-tags-main-container'>
        {tagsData.map((item, index) => (
            <div className='package-tag-card'>
                <h3>{item.tag}</h3>
                <div className='package-tag-details'>
                    <span>
                        <i>{<item.icon size={24}/>}</i>
                        <p>{item.itemOne}</p>
                    </span>
                    <span>
                        <i> {<item.icon size={24} />}</i>
                        <p>{item.itemTwo}</p>
                    </span>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Tags
