import React from 'react'
import './Section3.scss'

import icon3 from '../../Assets/icon3.png'
import sectionb from '../../Assets/sectionb.png'

const Section3 = () => {
  return (
    <section className='main text-dark p-5 text-center text-sm-start'>
        <div className="container">
            <div className="d-sm-flex">
                <div>
                    <h1>this is why we are best from others</h1>
                    <p className='lead my-4'>high-defination video is video of higher resolution and quality than standard definition. while there’s no<br/> standard meaning for high definition, generally any standard video image</p>
                    <button className='btn btn-primary btn-lg'>view courses</button>
                <div>
                <img className='a' src={sectionb} alt="" />
                </div>
                </div>
                <div className="row d-flex text-center">
                    <div className="col-sm">
                        <div className="card bg-light text-dark">
                            <div className="card-body text-center">
                                <div className="h1 mb-3 pics1">
                                <img src={icon3} alt="" />
                                </div>
                                <h3 className="card-title mb-3">
                                experienced mentors
                                </h3>
                                <p className="card-text">
                                high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                         <div className="card bg-light text-dark">
                            <div className="card-body text-center">
                                <div className="h1 mb-3 pics2">
                                <img src={icon3} alt="" />
                                </div>
                                <h3 className="card-title mb-3">
                                experienced mentors
                                </h3>
                                <p className="card-text">
                                high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. 
                                </p>
                            </div>
                        </div>
                        </div>
                    
                </div>
                <div className="row d-flex text-center">
                    <div className="col-sm">
                        <div className="card bg-light text-dark">
                            <div className="card-body text-center">
                                <div className="h1 mb-3 pics3">
                                <img src={icon3} alt="" />
                                </div>
                                <h3 className="card-title mb-3 ">
                                experienced mentors
                                </h3>
                                <p className="card-text">
                                high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm"> <div className="card bg-light text-dark">
                            <div className="card-body text-center">
                                <div className="h1 mb-3 pics4">
                                <img src={icon3} alt="" />
                                </div>
                                <h3 className="card-title mb-3">
                                experienced mentors
                                </h3>
                                <p className="card-text">
                                high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. 
                                </p>
                            </div>
                        </div>
                        </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section3