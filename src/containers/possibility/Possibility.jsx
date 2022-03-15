import React from 'react'
import './possibility.css'
import possibility from "../../assets/possibility.png"

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__margin'>
      <div className="gpt3__possibility-header">
        <div className='gpt3__possibility-header_image'>
          <img src={possibility} alt="Possibility" />
        </div>
        <div className='gpt3__possibility-header_content'>
          <span>Request Early Access to Get Started</span>
          <h1 className='gpt3__possibility-header_content-title gradient__text'>The possibilities are beyond your imagination</h1>
          <p className='gpt3__possibility-header_content-text'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
          <p>Request Early Access to Get Started</p>
        </div>
      </div>
      <div className='gpt3__possibility-footer'>
        <div className="gpt3__possibility-footer_text">
          <p>Request Early Access to Get Started</p>
          <h1>Register today & start exploring the endless possiblities.</h1>
        </div>
        <div className='gpt3__possibility-footer_button'>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Possibility