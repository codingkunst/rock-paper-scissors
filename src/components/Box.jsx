import React from 'react'
import '../App.css'

const Box = (props) => {
  return (
    <div className='box'>
      <h1>{props.title}</h1>
      <img className='item-img' src='https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296854_960_720.png' />
      <h2>win</h2>
    </div>
  )
}

// https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296855_1280.png
// https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296853_1280.png

export default Box