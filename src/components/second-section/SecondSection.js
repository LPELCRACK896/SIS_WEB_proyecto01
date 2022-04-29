import React from 'react'
import MainBanner from '../../media/second_section/whm-riotnet-graphic.png'
const SecondSection = () => {
  return (
    <div className='main-container-second-section'>
        <div className='first-flex-second-section'> 
            <h1 >What's happening</h1>
            <button className='see-more-button'>SEE MORE</button>
        </div>
        <div className='grid-container-second-section'>
            <div className='second-section-grid-main-card' style={{ backgroundImage: `url(${MainBanner})` }}/>
            <div className='second-section-grid-other-cards-space'>
                <div className='mini-card-section-2'></div>
                <div className='mini-card-section-2'></div>
                <div className='mini-card-section-2'></div>
                <div className='mini-card-section-2'></div>

            </div>

        </div>

    </div>
  )
}

export default SecondSection