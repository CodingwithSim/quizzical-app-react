import React from 'react'

function Menu(props) {
  return (
    <div className='menu'>
      <h1 className='menu-title'> Quizzical</h1>
      <span className='menu-description'>Test Your Knowledge...</span>
      <button className='start-btn' onClick={() => props.start()}>Start</button>
    </div>
  )
}

export default Menu
