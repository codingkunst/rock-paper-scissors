import React from 'react'
import '../App.css'

const Box = (props) => {
  console.log('props : ', props);
  return (
    <div className='rounded border border-gray-300 border-solid w-96'>
      <h1>{props.title}</h1>
      <img className='w-auto h-auto' src={props.item && props.item.image} />
      <h2>win</h2>
    </div>
  )
}

export default Box