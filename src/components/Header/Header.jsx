import { FaBars, FaTimes } from "react-icons/fa";
import React, { useRef } from "react";
import './Header.scss';
// import Cart from '../Cart/Cart'
import tech from "../../Assets/techtime.png"


const Header = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }


    return (
      <div className='navbar'>
          <div className='wrapper'>
              <div className="left">
              <div className="item">
                <img src={tech} alt="" />
                  </div>
              </div>
                      <div className="right" ref={navRef}>
                       <p>Home</p>
                       <p>About us</p>
                       <p>Courses</p>
                       <p>Testimonials</p>
                       <p>Community</p> 
                       <button>Enroll now</button>
                       <div className="nav-btn nav-close-btn" onClick={showNavbar}>
                        <FaTimes/>
                       </div>
                      </div>
                      <div className="nav-btn" onClick={showNavbar}>
                      <FaBars/>
                      </div>
          </div>
      </div>
    )
  }
  

export default Header;