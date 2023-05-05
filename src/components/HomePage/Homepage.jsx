import React from 'react';
import { NavLink, useNavigate} from 'react-router-dom'
import { Parallax } from 'react-parallax';
import './Homepage.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation, Autoplay } from "swiper"
import {animateScroll} from "react-scroll";
import image from './image/4img.jpg'
import home from './image/home3.jpg'
import drink from './image/bardrink.mp4'
import Iframe from 'react-iframe'


const Homepage = () => {

  const toTop = () => {
    animateScroll.scrollToTop({
        delay: 0,
        duration: 0
    })
};
const navigate = useNavigate()
 
    return (
        <section>
          <div className="container">
              <Parallax>
            <div className="content">
                <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={true}
        modules={[Keyboard, Pagination, Navigation,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><div className='home1'>
            <h2 className='subtitle'>Exclusive drink service</h2>
            <h1 className='title'>Coctail stage evenings</h1>
          <NavLink to='/menu'>  <button className='titleView'>View more...</button> </NavLink> 
            </div> 
             </SwiperSlide>
        <SwiperSlide> <div className='home2'>
        <h2 className='subtitle'>Exclusive drink service</h2>
            <h1 className='title'>Coctail stage evenings</h1>
            <NavLink to='/menu'>  <button className='titleView'>View more...</button> </NavLink> 

            </div></SwiperSlide>
     
      </Swiper>
            </div>
            </Parallax>
        <div className="home__main">
        
                <div className="home__info">
                  <div className="info__left">
                    <h3>Visit a bar</h3>
                  <h1>Open hours</h1>
                        <h5>Monday-Friday</h5>
                        <p>12:00 - 01:00am</p>
                        <h5>Saturday-Sunday</h5>
                        <p>12:00 - 03:00am</p>
                        <h4>Visit us</h4>
                  </div>
                  <div className="info__mid"> 
                    <img src={image} alt="" />
                  </div>
                  <div className="info__right">
                    <h3>The best offer</h3>
                    <h1>Happy hour</h1>
                    <h5>Monday-Sunday</h5>
                    <p>04:00pm - 07:00pm</p>
                    <h5>20% of all wine by the glass</h5>
                    <p>15% of all coctails</p>
                    <h5>25% of selected craft beer</h5>
                    <p>10% of all spirits</p>

                  </div>
                </div>
                
                </div>
                <Parallax strength={-700}   blur={{ min: -15, max: 15 }} bgImage ={home}>
            <div className="content">
            </div>
            </Parallax>
            <div className="home__rec">
              <div className="home__rec_info">
                <h3>This week's specials</h3>
                <h1>We recommend</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eligendi, distinctio minima totam dolores.</p>
              </div>
              <div className="rec__menu">
                <div className="rec__left">
                <h2>Coco spice ........................ $19</h2>
                <p>Captain Morgan spiced rum,pineapple</p>
                <h2>Tequila Sunrise ................. $14</h2>
                <p>Tequila, orange juice, grenadine</p>
                <h2>Cuba Libre ........................ $22</h2>
                <p>Dark rum, fresh lime, Coke</p>
                <h2>Gin fizz ................................ $24</h2>
                <p>Bombay Sapphire gin, Ginger beer, lime juice</p>
                <NavLink  onClick={()=>toTop()}  to='/menu'>  <button >View more...</button> </NavLink> 
                </div>
                <div className="rec__right">
                  <video className='video'  autoPlay muted loop id="myVideo">
                 <source src={drink} type="video/mp4"/>
                 </video>
                </div>
              </div>
            </div>
            <div className="home__end">
              <div className="end__left">
                <h1>Promotions</h1>
               
                <NavLink  onClick={()=>toTop()}  to='/menu'>  <button className='end_link'>Learn more</button> </NavLink> 

              </div>
              <div className="end__mid">
              <Iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1031.547283172005!2d74.6037899837215!3d42.86850929641307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7d033fe00bd%3A0x6d0d3c1796be1175!2z0J7QsdC70LDQutC-NTM!5e0!3m2!1sru!2skg!4v1680896358732!5m2!1sru!2skg" 
            allowfullscreen="" loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"></Iframe>
              </div>
              <div className="end__right">
              <h1>Promotions</h1>
              <NavLink  onClick={()=>toTop()} className='link' to='/menu'>  <button className='end_link'>Learn more</button> </NavLink> 

              </div>
            </div>
            </div>
        </section>
    );
};

export default Homepage;