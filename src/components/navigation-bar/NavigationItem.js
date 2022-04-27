import React, { useState } from 'react'
import { Link } from "react-router-dom";
const NavigationItem = (props) => {
    console.log("hola")
  return (
    <li className='container-title-item-nav'>
        <div className='nav-item text'>
            <div className="title-container-item-nav ">
                {props.title}
            </div>
            <svg display={props.drop?"auto":"none"}className="arrow-logo-on-title-items" viewBox="0 0 8 5"><title>mainMenuDownNonHover</title><path d="M.707 1.707l2.586 2.586a1 1 0 001.414 0l2.586-2.586C7.923 1.077 7.477 0 6.586 0H1.414C.524 0 .077 1.077.707 1.707z"></path></svg>

        </div>    
    </li>
  )
}

export default NavigationItem