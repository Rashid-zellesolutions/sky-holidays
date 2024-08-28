import React from "react";
import './index.css';

export default function CardDesign1({ img }) {
    return (
        <div className="cardDesign1" style={{ '--background-img': `url(${img})` }}>
            {/* Optional content to visualize the card */}
        </div>
    );
}
