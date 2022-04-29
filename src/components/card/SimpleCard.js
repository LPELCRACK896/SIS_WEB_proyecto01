import React from 'react'

const SimpleCard = (props) => {
  return (
    <div className='grid-mini-card'>
      <div className='text-container-mini-card'>
        <p className='title-mini-card'>
          {props.title}
        </p>
        <p className='sub-title-mini-card'>
          {props.subTitle}
        </p>
      </div>
      <div className='image-side-mini-card' style={{ backgroundImage: `url(${props.backgroundImage})`}}>

      </div>
    </div>
  )
}

export default SimpleCard