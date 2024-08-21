import React from 'react'
import '../App.css'

const Box = (props) => {

  let result;

  if (props.title === 'AI' && props.result !== '👿 무승부' && props.result !== '') {
    result = props.result === '🤪 WIN' ? '😭 LOSE' : '🤪 WIN';
  } else {
    result = props.result;
  }

  return (
    <div className='rounded border border-gray-300 border-solid w-96 m-5'>
      <h1 className='text-center bg-violet-200 text-3xl'>{props.title}</h1>
      <img className='w-auto h-auto' src={props.item && props.item.image} />
      <h2 className='text-center bg-violet-200 text-xl'>{result}</h2>
    </div>
  )
}

export default Box