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
                    <div style={{float:'left'}}>
                        <br></br>
                        <FontAwesomeIcon icon={faDesktop} size="7x" transform="right-65, down-50"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faDesktop} size="6x" transform="right-48, down-80"></FontAwesomeIcon>
                        <br></br>
                        <br></br>
                        <FontAwesomeIcon icon={faDesktop} size="5x" transform="right-65, down-95"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faDesktop} size="4x" transform="right-45, down-138"></FontAwesomeIcon>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <FontAwesomeIcon icon={faBroadcastTower} size="8x" transform="right-5"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faServer} size="8x" transform="left-13, down-20"></FontAwesomeIcon>
                    <div style={{float:'right'}}>
                        <FontAwesomeIcon icon={faDesktop} size="7x" transform="left-55, down-43"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faDesktop} size="6x" transform="left-75, down-73"></FontAwesomeIcon>
                        <br></br>
                        <br></br>
                        <FontAwesomeIcon icon={faDesktop} size="5x" transform="left-60, down-88"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faDesktop} size="4x" transform="left-80, down-128"></FontAwesomeIcon>
                    </div>
                </div>
                <p className="text" style={{position: 'absolute', left:200}}>The internet is actually a bunch of connections<br></br> connecting computers to other computers.</p>
                <p className="text" style={{position: 'absolute', right:200}}>Some of these computers host websites (like ours!)</p>
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