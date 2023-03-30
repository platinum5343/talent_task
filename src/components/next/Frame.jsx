import React from 'react'
import dropbox from '../../Assets/Vector.png'
import zoom from '../../Assets/Vector (7).png'
import day from '../../Assets/path851.png'
import './frame.css'

const Frame = () => {
  return (
    <div className='begin'>
        <div className="new">
            <div><img src={zoom} alt="" /></div>
            <div className='second'>stripe</div>
            <div className='last'>
              <img src={day} alt="" />
              <div className='com'>.com</div>
              </div>
            <div className='second' >slack</div>
            <div className='last'>
                <img src={dropbox} alt="" />
                <h1>dropbox</h1>
            </div>
            <div></div>

        </div>
    </div>
  )
}

export default Frame