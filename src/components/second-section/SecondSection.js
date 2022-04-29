import React from 'react'
import MainBanner from '../../media/second_section/whm-riotnet-graphic.png'
import SimpleCard from '../card/SimpleCard'
import Raze from '../../media/second_section/raze-mini-card.png'
import Rosa from '../../media/second_section/fortichexrg-4.png'
import Black from '../../media/second_section/black.jpg'
import Fist from '../../media/second_section/Fist.png'
const SecondSection = () => {
  return (
    <div className='main-container-second-section'>
        <div className='first-flex-second-section'> 
            <h1 >What's happening?</h1>
            <button className='see-more-button'>SEE MORE</button>
        </div>
        <div className='grid-container-second-section'>
            <div className='second-section-grid-main-card' style={{ backgroundImage: `url(${MainBanner})` }}/>
            <div className='second-section-grid-other-cards-space'>
                <div className='mini-card-section-2'>
                    <SimpleCard backgroundImage={Raze} title="How Rioters in Brazil Helped Create Raze, the Dancing Salvadorian..." subTitle="INSIDE RIOT"/>
                </div>
                <div className='mini-card-section-2'>
                    <SimpleCard backgroundImage={Rosa} title="Riot Games Announces New Equity Investment in “Arcane” Animation..." subTitle="NEWS"/>
                </div>
                <div className='mini-card-section-2'>
                    <SimpleCard backgroundImage={Black} title="Black History Month Recap" subTitle="INSIDE RIOT"/>
                </div>
                <div className='mini-card-section-2'>
                    <SimpleCard backgroundImage={Fist} title="Riot is Donating Battle Pass Sales to Humanitarian Relief..." subTitle="NEWS"/>
                </div>

            </div>

        </div>

    </div>
  )
}

export default SecondSection