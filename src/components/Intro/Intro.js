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
                <b className="header">What is the internet?</b>
                <div className="text">It's a way for computers to connect to other computers.</div>
                <div class="intro-container">
                    <div style={{float:'left'}}>
                        <br></br>
                        <FontAwesomeIcon icon={faDesktop} size="8x" transform="right-3"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faDesktop} size="8x" transform="right-18"></FontAwesomeIcon>
                        <br></br>
                        <br></br>
                        <FontAwesomeIcon icon={faDesktop} size="8x" transform="right-10"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faDesktop} size="8x" transform="right-25"></FontAwesomeIcon>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <FontAwesomeIcon icon={faBroadcastTower} size="8x" transform="right-5"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faServer} size="8x" transform="left-10, down-20"></FontAwesomeIcon>
                    <div style={{float:'right'}}>
                        <FontAwesomeIcon icon={faDesktop} size="8x" transform="left-20"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faDesktop} size="8x" transform="left-5"></FontAwesomeIcon>
                        <br></br>
                        <br></br>
                        <FontAwesomeIcon icon={faDesktop} size="8x" transform="left-30"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faDesktop} size="8x" transform="left-15"></FontAwesomeIcon>
                    </div>
                </div>
                <div className="text">The internet is actually a bunch of connections <br></br>connecting computers to other computers.</div>
                <div className="text">Some of these computers host websites (like ours!)</div>
              </h2>
            </div>
        )
    }

}

//Always export default. 
export default Intro;