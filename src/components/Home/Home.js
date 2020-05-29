import React from "react";
import logoTLA from "../../img/logoTLA.svg";

import { faDesktop, faWifi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            message: "false",
            hover: false
        };
    }

    handleInput = (e) => {
        this.setState({text: e.target.value});
    }
/*
    showMessage = (e) => {
        this.showMessage("Hello");
    }*/
    onMouseEnter() {
        this.setState({message: 'true'}, {hover: true})
    }
    onMouseLeave() {
        this.setState({message: 'false'}, {hover: false})
    }
    
    render = () => {
        return (
            <div>
                <a href="https://teachla.uclaacm.com" ><img src={logoTLA} alt="ACM TeachLA"/> </a>
                <h1 class="title is-1">Websites on the Internet</h1>
                <br></br>
                <FontAwesomeIcon icon={faWifi} size="3x" color="Mediumslateblue"></FontAwesomeIcon>
                <br></br>
                <FontAwesomeIcon icon={faDesktop} size="7x" 
                onMouseEnter={() => this.onMouseEnter()}
                onMouseLeave={() => this.onMouseLeave()}>
                </FontAwesomeIcon>
                {this.state.hover && (
                    <div>i'll appear when hovered</div>
                )}
                <br></br>
                <br></br>
                <button className="button">Let's go!</button>
                <h2 className="header">Hey there!</h2>
                <p>The internet can be a scary place, so we're here to help you figure out how it works. Are you ready?</p>
                
            </div>
        )
    }
}

export default Home;