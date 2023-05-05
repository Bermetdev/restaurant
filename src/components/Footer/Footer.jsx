import React from 'react';
import { NavLink, useNavigate} from 'react-router-dom'
import {animateScroll} from "react-scroll";
import './Footer.scss'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import image1 from './image/1img.jpg'
import image2 from './image/2img.jpg'
import image3 from './image/3img.jpg'
import image4 from './image/4img.jpg'
import image5 from './image/5img.jpg'
import image6 from './image/6img.jpg'

const Footer = () => {
    const toTop = () => {
        animateScroll.scrollToTop({
            delay: 0,
            duration: 0
        })
    };
    const navigate = useNavigate()
    return (
        <footer>
            <div className="container">
                <div className="footer">
                    <div className="footer__left">
                            <div className="left">
                                <h1>#Oblako 53</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptas molestiae tempora.</p>
                                <p> <span> <AccessTimeIcon/></span> Mon-Sun: 12pm - 01am</p>
                                <p> <span> <LocationOnIcon/> </span> Razzakova 19, Bishkek</p>
                                <p><span> <PhoneIcon/> </span> +996505000053</p>
                            </div>
                            <div className="right">
                                <h2>Pages</h2>
                                
                              
                                <ul>
                                    <li> <NavLink onClick={()=>toTop()} to='/'> Home</NavLink> </li>
                                    <li><NavLink onClick={()=>toTop()} to='/about'>About</NavLink></li>
                                    <li><NavLink onClick={()=>toTop()} to='/reservation'>Reservations</NavLink></li>
                                    <li><NavLink onClick={()=>toTop()} to='/menu'>Menu</NavLink></li>
                                    <li><NavLink onClick={()=>toTop()} to='/contact'>Contact</NavLink></li>
                                </ul>
                            </div>
                    </div>
                    <div className="footer__mid">
                        <h2>Opening hours</h2>
                        <p>Monday-Friday</p>
                        <p>12:00 - 01:00am</p>
                        <p>Saturday-Sunday</p>
                        <p>12:00 - 03:00am</p>
                    </div>
                    <div className="footer__right">
                        <h2>Instagram</h2>
                        <div className="cards">
                            <ul>
                                <li><a href="https://www.instagram.com/p/CphgRnoI9U-/?utm_source=ig_web_button_share_sheet"> <img src={image1} alt="" /> </a></li>
                                <li><a href="https://www.instagram.com/p/Cojp8cFosms/?utm_source=ig_web_button_share_sheet"> <img src={image2} alt="" /> </a></li>
                                <li> <a href="https://www.instagram.com/p/ChMttcqIfNQ/?utm_source=ig_web_copy_link"> <img src={image3} alt="" /></a></li>
                                <li> <a href="https://www.instagram.com/p/CdBU7tVKFDP/?utm_source=ig_web_copy_link"><img src={image4} alt="" /></a></li>
                                <li> <a href="https://www.instagram.com/p/CaMfxm-qVqb/?utm_source=ig_web_copy_link"><img src={image5} alt="" /></a></li>
                                <li> <a href="https://www.instagram.com/p/CRBwsPOpLPU/?utm_source=ig_web_copy_link"><img src={image6} alt="" /></a></li>
                            </ul>
                            {/* <a href="https://www.instagram.com/p/CphgRnoI9U-/?utm_source=ig_web_button_share_sheet"> <img src={image1} alt="" /> </a>
                            <a href="https://www.instagram.com/p/Cojp8cFosms/?utm_source=ig_web_button_share_sheet"> <img src={image2} alt="" /> </a>
                            <a href="https://www.instagram.com/p/ChMttcqIfNQ/?utm_source=ig_web_copy_link"> <img src={image3} alt="" /></a>
                            <a href="https://www.instagram.com/p/CdBU7tVKFDP/?utm_source=ig_web_copy_link"><img src={image4} alt="" /></a>
                            <a href="https://www.instagram.com/p/CaMfxm-qVqb/?utm_source=ig_web_copy_link"><img src={image5} alt="" /></a>
                            <a href="https://www.instagram.com/p/CRBwsPOpLPU/?utm_source=ig_web_copy_link"><img src={image6} alt="" /></a> */}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;