import React, { useContext, useState } from 'react';
import './Contact.scss'
import { Parallax } from 'react-parallax';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import contact from './image/contact1.jpg'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import Iframe from 'react-iframe'
import { CustomContext } from '../../utils/context';
import { animateScroll } from "react-scroll";


const Contact = () => {

    const toTop = () => {
        animateScroll.scrollToTop({
          delay: 0,
          duration: 0,
        });
      };

    const navigate = useNavigate()

    const {message} = useContext(CustomContext)
    console.log(message)

    const [messageAbout, setMessageAbout] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false);


    const postMessage = (e) => {
        e.preventDefault()

        setIsSubmitted(true); 


        const personMessage = {
            messageAbout,
            name,
            email,
        }
        console.log(personMessage)

         axios
            .post('http://localhost:8080/message', personMessage)
            .then(({data}) => {
                setMessageAbout("")
                setName("")
                setEmail("")
                navigate("/contact")
            })
    }

    const reverseArr = message.reverse()




    return (
        <section className='message'>
            <div className="container">
             <Parallax strength={-200} bgImage={contact}>
            <div className="content">
                <div className="text-content">Contact</div>
            </div>
            </Parallax>
            <div className="message__top">
<div className="message__wrapper">
{
                reverseArr.slice(0,3)
                .map((el)=> 

                (
                    <div className="message__card">
                        <p>{el.messageAbout}</p>
                        <h5>{el.name}</h5>
                        <h5>{el.email}</h5>
                    </div>
                ))
            }
           

</div>
            </div>
            <div className="contact">
                <div className="contact__box">
                <div className="contact__left">
                    <div className="top">
                        <p>Contact us</p>
                        <h1>Get in touch</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id nulla corrupti illum nam eveniet, dicta consequuntur asperiores perspiciatis unde assumenda sit non aspernatur labore reiciendis, voluptatibus iure maxime fuga veniam.</p>
                    </div>
                    <div className="end">
                                <p> <span> <AccessTimeIcon/></span> Mon-Sun: 12pm - 01am</p>
                                <p> <span> <LocationOnIcon/> </span> Razzakova 19, Bishkek</p>
                                <p><span> <PhoneIcon/> </span> +996505000053</p>
                    </div>
                </div>
                <form  className="contact__right" onSubmit={postMessage}>
                    <input value={messageAbout} onChange={(e) => setMessageAbout(e.target.value)} className='messageInfo' type="text" placeholder='Your Message' />
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Your Name'/>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Your Email'/>
                    <button onClick={() => toTop()} className='btn' type="submit"> Submit </button>
                    {isSubmitted && <p className='request'>Your message is sent! </p>}

                </form>
            </div>
            </div>
            <div className="location">
            <Iframe className='location__map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1031.547283172005!2d74.6037899837215!3d42.86850929641307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7d033fe00bd%3A0x6d0d3c1796be1175!2z0J7QsdC70LDQutC-NTM!5e0!3m2!1sru!2skg!4v1680896358732!5m2!1sru!2skg" 
            allowfullscreen="" loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"></Iframe>
            </div>
            </div>
        </section>
    );
};

export default Contact;