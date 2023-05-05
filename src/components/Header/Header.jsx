import React, { useRef }  from 'react';
import './Header.scss'
import "@fontsource/amiri";
import {useLocation, NavLink, useNavigate} from 'react-router-dom';
import {animateScroll} from "react-scroll";
import {FaBars, FaTimes} from "react-icons/fa"

const Header = () => {
  const {pathname} = useLocation()
  console.log(pathname)

  const navRef = useRef();

  const showNavbar = ()=> {
    navRef.current.classList.toggle("responsive_nav")
  }
  const toTop = () => {
    animateScroll.scrollToTop({
        delay: 0,
        duration: 0
    })
};
const navigate = useNavigate()
    return (
        <header className='header'>
       <div className='header__wrapper'>
       <div className="header__logo"> <NavLink onClick={()=>toTop()} to='/'><h1> #OBLAKO 53 </h1> </NavLink>  </div>
      
         <nav ref={navRef}>
          <ul className='header__lists'>
                                    <li> <NavLink onClick={()=>toTop()}  className='header__link' to='/'> Home</NavLink> </li>
                                    <li><NavLink onClick={()=>toTop()}  className='header__link'  to='/about'>About</NavLink></li>
                                    <li><NavLink onClick={()=>toTop()}  className='header__link' to='/reservation'>Reservations</NavLink></li>
                                    <li><NavLink onClick={()=>toTop()}  className='header__link' to='/menu'>Menu</NavLink></li>
                                    <li><NavLink onClick={()=>toTop()}  className='header__link' to='/contact'>Contact</NavLink></li>

                                    <button className='nav-btn nav-close-btn' onClick={showNavbar}> <FaTimes/> </button>
                                </ul>
                                <NavLink onClick={()=>toTop()} to='/reservation'><button className='header__button'> Book a table </button></NavLink> 

                                </nav>
                                <button className='nav-btn' onClick={showNavbar}> <FaBars/> </button>
         
       </div>
     
        </header>
    );
};

export default Header;