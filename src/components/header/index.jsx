import React from "react";
import './index.css';
import logo from "../../assets/logo.png"
import cart from "../../assets/cart.png"
import user from "../../assets/user.png"
import call from "../../assets/call.png"
import mail from "../../assets/mail.png"
import fb_small from "../../assets/fb_small.png";
import insta_small from "../../assets/insta_small.png";
import twitter_small from "../../assets/twitter_small.png";
import youtube_small from "../../assets/youtube_small.png";

export default function HeaderBar() {
    return (
       <div className="mainHeader">
         <div className="topHeader">
            <div className="leftContent">
                <ul>
                    <li>
                        <a href="">
                            <img src={call} alt="" srcset="" />
                            (+92) 332 -507 -5900
                            </a>
                    </li>
                    <li>
                        <a href="">
                             <img src={mail} alt="" srcset="" />
                            info@skyholidays.pk
                            </a>
                    </li>
                </ul>
            </div>

            <div className="leftContent">
                <ul>
                    <li>
                        <a href=""> <img src="" alt="" /></a>
                    </li>
                    <li>
                        <a href=""> <img src="" alt="" /></a>
                    </li>
                    <li>
                        <a href=""> <img src="" alt="" /></a>
                    </li>
                    <li>
                        <a href=""> <img src="" alt="" /></a>
                    </li>
                </ul>
            </div>
           
         </div>
         <div className="subHeader">
            <div className="logoSide">
                <img src={logo} alt="" srcset="" />
            </div>
            <div className="linksSide">
                <nav>
                    <ul>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Hotels</a>
                        </li>
                        <li>
                            <a href="/package-details">Tours</a>
                        </li>
                        <li>
                            <a href="">Excursions</a>
                        </li>
                        <li>
                            <a href="">Car</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="actionSide">
                <ul>
                    <li>
                        <div className="miniCart">
                            <img src={cart} alt="" srcset="" />
                        </div>
                    </li>
                    <li>
                        <div className="miniCart">
                            <img src={user} alt="" srcset="" />
                        </div>
                    </li>
                    <li>
                        <button className="btn1">
                            Become a Host
                        </button>
                    </li>
                </ul>
            </div>
        </div>
       </div>
    )
}