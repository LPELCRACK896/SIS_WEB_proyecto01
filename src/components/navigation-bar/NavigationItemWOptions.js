import React, { useState } from 'react'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const NavigationItemWOptions = (props) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <li className='container-title-item-nav'onMouseEnter={() => setIsShown(true)}
    onMouseLeave={() => setIsShown(false)}>
        <div className='nav-item text'>
            <div className="title-container-item-nav ">{props.title}</div>
            <svg className="arrow-logo-on-title-items" viewBox="0 0 8 5"><title>mainMenuDownNonHover</title><path d="M.707 1.707l2.586 2.586a1 1 0 001.414 0l2.586-2.586C7.923 1.077 7.477 0 6.586 0H1.414C.524 0 .077 1.077.707 1.707z"></path></svg>
        </div>
        <div  className='wrapper-floatin-options-square'>
          {isShown &&(<ul className='floatin-options-square special-list' >
            {
              props.options.map(element => {
                return(
                  <li className='item-float-options-square' >{element}</li>
                )
                
              })
            
            }
          </ul>)}
        </div>
    </li>
  )
}

export default NavigationItemWOptions