import React from "react";
import logoTLA from "../../img/logoTLA.svg";


class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: "Hello world"
        }
    }

    handleInput = (e) => {
        this.setState({text: e.target.value});
    }

    render = () => {
        return (
            <div>
                <a href="https://teachla.uclaacm.com" ><img src={logoTLA} alt="ACM TeachLA"/> </a>
                <h1 class="title is-1">Websites on the Internet</h1>
                <p> {this.state.text}</p>
                <input className="input is-rounded" onChange={this.handleInput} type="text" />
                <h2>Hey there!</h2>
                <p>The internet can be a scary place, so we're here to help you figure out how it works. Are you ready?</p>
                
            </div>
        )
    }
}

export default Home;