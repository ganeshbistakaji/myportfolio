import React from 'react'
import './css/Bar.scss'

const Bar = () => {
  return (
    <div className='bar'>
      <div className="box">
        <p className="title">Web Development</p>
        <p className="desc">Full Stack</p>
        
      </div>
      <div className="box">
        <p className="title">Web/App</p>
        <p className="desc">Designing</p>
      </div>
      <div className="box">
        <p className="title">PocketMine-MP</p>
        <p className="desc">Minectaft Software</p>
      </div>
      <div className="box">
        <p className="title">Linux Server</p>
        <p className="desc">Management</p>
      </div>
    </div>
  )
}

export default Bar