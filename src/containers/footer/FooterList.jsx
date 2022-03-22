import React from 'react'

const FooterList = ({ title, items }) => {
  return (
    <div className='gpt3__footer-content__list'>
      <h1>{ title }</h1>
      <ul>
        { items.map((item, index) => (
          <li key={index}>{item.link_name}</li>
        )) }
      </ul>
    </div>
  )
}

export default FooterList