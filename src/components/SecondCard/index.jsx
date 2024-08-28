import React from "react";
import CardDesign1 from "../../utils/CardDesign1";
import './index.css'

export default function SecondSection() {
    return (
        <div className="secondSection">
            <CardDesign1 img={"https://skyholidays.pk/wp-content/uploads/2022/12/Homepage-Banner-1.png"} />
            <CardDesign1 img={"https://skyholidays.pk/wp-content/uploads/2022/12/Homepage-Banner-2.png"} />
        </div>
    )
}