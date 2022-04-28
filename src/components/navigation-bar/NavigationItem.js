import React from 'react'


const NavigationItem = (props) => {
  return (
    <li className='container-title-item-nav'>
        <div className='nav-item text'>
            <div className="title-container-item-nav">
                {props.title}
            </div>
        </div>

    </li>
  )
}

export default NavigationItem