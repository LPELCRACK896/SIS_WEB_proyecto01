import React from 'react'

const ColourfullCard = (props) => {
  return (
    <div className='wmenu-container-special-card-item'> 
      <div className='special-card-item' style={{ backgroundImage: `url(${props.specialCard})` }}/>
    </div>
  )
}

export default ColourfullCard
