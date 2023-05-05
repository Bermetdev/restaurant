import React from 'react';
import { Parallax } from 'react-parallax';
import about from './images/imgabout.jpg'
import infoImg from './images/info.jpg'
import './About.scss'


const Main = () => {
    return (
    
            <div className="container">
            <Parallax strength={-100} bgImage={about}>
            <div className="content">
               
                <div className="text-content">About</div>
            </div>
            </Parallax>
          
          
            <div className="about">
                <div className="about__top">
                    <div className="about__info">
                        <div className="about__left">
                        <img src={infoImg} alt=""  />
                        </div>
                        <div className="about__right">
                            <h1>Our story</h1>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut sequi commodi in dolorem, praesentium natus esse explicabo nesciunt ipsum neque, ea exercitationem omnis accusamus voluptatibus, expedita eligendi enim ipsam! Quisquam?
                            </p>
                            <button>View more...</button>
                        </div>
                    </div>
                </div>
                <div className="about__video">
                <iframe className='video' 
                src="https://www.youtube.com/embed/ax2y1SQzDX4" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen></iframe>
                </div>
            
            </div>
            </div>
   
    );
};

export default Main;