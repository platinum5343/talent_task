import React from 'react'
import './Section2.scss'
import sectionA from '../../Assets/sectionA.png'
import sectionc from '../../Assets/sectionc.png'
import volume from '../../Assets/volume_up.png'
import { Button } from 'react-bootstrap'

const Section2 = () => {
  return (
    <section className='main text-dark p-5 text-center text-sm-start'>
        <div className="container">
            <div className="d-sm-flex">
                <div>
                    <h1>High quality video, audio & live classes</h1>
                    <p className='lead my-4'>high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
                    <button className='btn btn-primary btn-lg'>view courses</button>
                <div>
                    <div>
                        <div className='now'>
                        <div className='bull'>
                        <img  width={10} height={20} src={volume} alt="" />
                        <h6>Audio classes</h6>
                        </div>
                        <div className='bull'>
                        <img src={volume} alt="" />
                        <h6>Audio classes</h6>
                        </div>
                        </div>
                        <div className='now'>
                        <div className='bull'>
                        <img src={volume} alt="" />
                        <h6>Audio classes</h6>
                        </div>
                        <div className='bull'>
                        <img src={volume} alt="" />
                        <h6>Audio classes</h6>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className='img' >
                <img className='a' src={sectionA} alt="" />
                <img className="c" src={sectionc} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section2