import React from 'react'
import './css/bar.scss'

const Bar = () => {
  return (
    <div className='bar'>
      <div className="box">
        <p className="title">3 Years</p>
        <p className="desc">Web Development</p>
      </div>
      <div className="box">
        <p className="title">2 Years</p>
        <p className="desc">Web/App Design</p>
      </div>
      <div className="box">
        <p className="title">1 Year</p>
        <p className="desc">PocketMine-MP</p>
      </div>
      <div className="box">
        <p className="title">Multiple</p>
        <p className="desc">Programming Languages</p>
      </div>
    </div>
  )
}

export default Bar