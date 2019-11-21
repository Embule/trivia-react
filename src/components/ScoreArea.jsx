import React from 'react'
import TotalScore from './TotalScore'
import TotalLives from './TotalLives'
import Countdown from 'react-countdown-now';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

export default function ScoreArea(props) {



    return (
        <div className="scorecontainer" >
            <TotalScore score={props.score} />
            <TotalLives lives={props.lives} />
            <div className="scorecomponent">
                <h2 ><FontAwesomeIcon icon={faClock} /> <Countdown ref={props.countdownRef} date={props.date} renderer={props.renderer} /></h2>
            </div>
        </div>
    )
}
