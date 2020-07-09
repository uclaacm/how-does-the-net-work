import React from "react";
import Anime from "react-anime";
import logoTLA from "../../img/logoTLA.svg";

import { faDesktop, faWifi, faComment } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Home extends React.Component{
    /*
    constructor(props){
        super(props);
        this.state = {
            message: "false",
            hover: false
        };
    }*/
    
    render = () => {
        return (
            <div>
                <a href="https://teachla.uclaacm.com" ><img src={logoTLA} alt="ACM TeachLA"/> </a>
                <h1 class="title is-1">Websites on the Internet</h1>
                <br></br>
                <Anime duration={1000} easing="linear" direction="alternate" loop={true} translateY={[-15]}>
                    <FontAwesomeIcon icon={faWifi} size="3x" color="Mediumslateblue"></FontAwesomeIcon>
                </Anime>
                <FontAwesomeIcon icon={faDesktop} size="7x"></FontAwesomeIcon>
                <Anime scale={[0,1]} delay={800}>
                <span class="fa-layers fa-fw">
                <FontAwesomeIcon icon={faComment} color="lightgrey" size="7x" transform="right-5 up-11"></FontAwesomeIcon>
                <p class="is-size-6" style={{position: 'absolute', left: '130px', top: '-158px'}} >
                  Are you there?
                </p>
                </span>
                </Anime>
                
                <h2 className="header">Hey there!</h2>
                <p>The internet can be a scary place, so we're here to help you figure out how it works. Are you ready?</p>
            </div>
        )
    }
}

export default Home;