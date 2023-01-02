import React from 'react'

function Backdrop(props) {
  return (
    <div className='position-fixed h-100 w-100' style={{backgroundColor:'#343a409e', top:0, left:0}} onClick={props.click}>
        {props.children}
    </div>
  )
}

export default Backdrop