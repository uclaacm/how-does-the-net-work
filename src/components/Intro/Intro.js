import React from 'react';
import '../../App.css';
import Anime from 'react-anime';

import { faDesktop, faBroadcastTower, faServer, faArrowsAltV, faRss } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//See it's instance under App.js
class Intro extends React.Component {
    render = () => {
        return(
            <div class="content has-text-centered" className="intro">
              <h2>
                <br></br>
                <b className="header">What is the internet?</b>
                <div className="text">It's a way for computers to connect to other computers.</div>
                <div class="intro-container" style={{alignSelf:'center'}}>
                    <div style={{alignContent:"center", margin:'20px'}}>
                        <Anime scale={[0.75, 1]} loop={true} translateY={[-5]}>
                            <FontAwesomeIcon icon={faBroadcastTower} size="8x"></FontAwesomeIcon>
                        </Anime>
                    </div>
                    <div style={{alignContent:"center", margin:'20px'}}>
                        <FontAwesomeIcon icon={faServer} size="8x"></FontAwesomeIcon>
                    </div>
                    <div style={{alignContent:"center", margin:'20px'}}>
                        <FontAwesomeIcon icon={faDesktop} size="7x"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faArrowsAltV} size="8x" style={{marginLeft:'250px', marginRight:'250px'}}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faDesktop} size="7x"></FontAwesomeIcon>
                    </div>
                    <Anime scale={[1, 1]} delay={800} loop={true} translateY={[-50]} translateX={[50]}>
                        <span class="fa-layers fa-fw">
                        <FontAwesomeIcon icon={faRss} size="7x" transform="left-40 up-31" ></FontAwesomeIcon>
                        </span>
                    </Anime>
                    <Anime scale={[1,1]} delay={800} loop={true} translateY={[-50]} translateX={[-50]}>
                        <span class="fa-layers fa-fw">
                        <FontAwesomeIcon className="fa-flip-horizontal" icon={faRss} size="7x" transform="right-25 up-33" ></FontAwesomeIcon>
                        </span>
                    </Anime>
                    <div style={{marginBottom:'20px'}}>
                        <a style={{fontSize:'30px', color:'black'}} href="http://www.uclaacm.com/">uclaacm.com</a>
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