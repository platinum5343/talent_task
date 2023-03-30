import React from 'react'
import css from './Hero.module.css'
import heroImg from '../../Assets/HERO IMAGEE.png';
import { BsArrowUpRight } from "react-icons/bs";


const Hero = () => {
  return (
    <div className={css.container}>
      <div className={css.containers}>
   <div className={css.home}>
   <h3>Grow Your skills to <br/>advance your career path</h3>
   <p>Build Your User With Our Quality Education. <br/>The Best And Largest All-In-One Online Tutoring Platform In The World </p>
   <div className={css.button}>
    <div className={css.button1}>
   <div>Get Started Now</div>
   <BsArrowUpRight /> 
   </div>
   <div className={css.button2}>Enroll now</div>
   </div>
   </div>
   <div className={css.img}>
    <img src={heroImg} alt="" width={450} height={500}/>
   </div>
   </div>
    </div>
   
  )
}

export default Hero