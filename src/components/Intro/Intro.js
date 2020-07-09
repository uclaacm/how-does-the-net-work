import React from 'react';
import ReactDOM from 'react-dom'
import '../../App.css';
import computer from '../../img/computer.png';

import { faDesktop, faBroadcastTower, faServer, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Computer() {
    return <img src={{computer}} alt="computer" />
}

//See it's instance under App.js
class Intro extends React.Component {
    constructor(props){
        super(props);
    }

    render = () => {
        return(
            <div class="content has-text-centered" className="intro">
              <h2>
                <br></br>
                <b className="header">What is the internet?</b>
                <div className="text">It's a way for computers to connect to other computers.</div>
                <div class="intro-container">
                    <div style={{alignContent:"center", margin:'20px'}}>
                    <FontAwesomeIcon icon={faBroadcastTower} size="8x"></FontAwesomeIcon>
                    </div>
                    <div style={{alignContent:"center", margin:'20px'}}>
                    <FontAwesomeIcon icon={faServer} size="8x"></FontAwesomeIcon>
                    </div>
                    <div class="tier-1" style={{alignItems:"center"}}>
                        <FontAwesomeIcon icon={faDesktop} size="7x"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faDesktop} size="7x"></FontAwesomeIcon>
                    </div>
                    <div class="tier-2" style={{alignItems:"center"}}>
                        <FontAwesomeIcon icon={faDesktop} size="6x"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faDesktop} size="6x"></FontAwesomeIcon>
                    </div>
                    <div class="tier-3" style={{alignItems:"center"}}>
                        <FontAwesomeIcon icon={faDesktop} size="5x"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faDesktop} size="5x"></FontAwesomeIcon>
                    </div>
                    <div class="tier-4" style={{alignItems:"center"}}>
                        <FontAwesomeIcon icon={faDesktop} size="4x"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faDesktop} size="4x"></FontAwesomeIcon>
                    </div>
                </div>

                <div className="text-left">
                    <p className="text">The internet is actually a bunch of connections<br></br> connecting computers to other computers.</p>
                </div>
                <div className="text-right">
                    <p className="text">Some of these computers host websites (like ours!)</p>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
              </h2>
            </div>
        )
    }

}

//Always export default. 
export default Intro;