import React from 'react'
import ColourfullCard from '../card/ColourfullCard'
import LeagueOfLegends  from '../../media/wmenu_cards/lol.jpeg'
import Valorant from '../../media/wmenu_cards/Valorant_2022_E4A3_PlayVALORANT_RiotBarProductCard_1920x1080_MB01.jpeg'
import LegendsOfRunterraria from '../../media/wmenu_cards/LoR_Riot_BarApplicationSwitcher_GameCards_1920x1080_updated.jpeg'
import TeamFightTactics from '../../media/wmenu_cards/TFT_622_KV_1920x1080_ALyu_Final.jpeg'
import LolWildRift from '../../media/wmenu_cards/Wildrift.jpeg'
import HexTechMayhem from '../../media/wmenu_cards/JFG_Key_Art_T2AV2.jpeg'
import RuinedKing from '../../media/wmenu_cards/ruined_king.jpeg'
import ConvRgence from '../../media/wmenu_cards/convergence.jpeg'
import SongOfNunu from '../../media/wmenu_cards/Everson_KeyArt01.jpeg'

const ThirdSection = () => {
  return (
    <div className='third-section-main-container'>
        <div className='third-section-center'>
            <div className='our-games'>Our games</div>
            <div className='flex-wrapper-third-section'>
                <div className='card-container-third-section-big'>
                    <ColourfullCard specialCard={LeagueOfLegends}/>
                </div>
                <div className='card-container-third-section-big'>
                    <ColourfullCard specialCard={Valorant}/>
                </div>
                <div className='card-container-third-section-small'>
                    <ColourfullCard specialCard={LegendsOfRunterraria}/>
                </div>
                <div className='card-container-third-section-small'>
                    <ColourfullCard specialCard={TeamFightTactics}/>   
                </div>
                <div className='card-container-third-section-small'>
                    <ColourfullCard specialCard={LolWildRift}/>   
                </div>
                <div className='card-container-third-section-small'>
                    <ColourfullCard specialCard={HexTechMayhem}/>    
                </div>
                <div className='card-container-third-section-small'>
                    <ColourfullCard specialCard={RuinedKing}/>   
                </div>
                <div className='card-container-third-section-small'>
                    <ColourfullCard specialCard={ConvRgence}/>   
                </div>
                <div className='card-container-third-section-small'>
                    <ColourfullCard specialCard={SongOfNunu}/>   
                </div>                           
            </div>
        </div>
    </div>
  )
}

export default ThirdSection