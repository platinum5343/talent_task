import React from 'react'
import './Section5.scss';
import first from '../../Assets/1.png'
import second from '../../Assets/2.png'
import third from '../../Assets/3.png'
import fourth from '../../Assets/4.png'
import fifth from '../../Assets/5.png'
import sixth from '../../Assets/6.png'
import seventh from '../../Assets/7.png'
import  eight from '../../Assets/8.png'
import ninth from '../../Assets/9.png'
import tenth from '../../Assets/10.png'

const Section5 = () => {
  return (
    <div className='mains text-dark p-5 text-center text-sm-start'>
         <div className="container">
            <div className="d-sm-flex">
                <div className='section4'>
                    <h6>join our community</h6>
                    <h1>Are you  ready to connect with the future talent of the tech world</h1>
                    <p className='lead my-4'>meet up with other techstars and grow together</p>
                    
                <div>
                    <div>
                       
                        
                    </div>
                </div>
                </div>
                        </div>
                <div className="img">
                    <img src={first} alt="" />
                    <img src={second} alt="" />
                    <img src={third} alt="" />
                    <img src={fourth} alt="" />
                    <img src={fifth} alt="" />
                    <img src={sixth} alt="" />
                    <img src={seventh} alt="" />
                    <img src={eight} alt="" />
                    <img src={ninth} alt="" />
                    <img src={tenth} alt="" />
                </div>
                <button className='bo'>Enroll now</button>
                    </div>
    </div>
  )
}

export default Section5