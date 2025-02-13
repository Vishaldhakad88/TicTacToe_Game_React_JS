import React from 'react'

function Square(props) {
  return (
    <div
    onClick={props.onClick}
    className='square'>
        <h1 style={{color:'red'}}>{props.value}</h1>
    </div>
  )
}

export default Square