import React from "react";
import logoTLA from "../../img/logoTLA.svg";


class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: "hello world"
        }
    }

    handleInput = (e) => {
        this.setState({text: e.target.value});
    }

    render = () => {
        return (
            <div>
                <a href="https://teachla.uclaacm.com" ><img src={logoTLA} alt="ACM TeachLA"/> </a>
                <h1 class="title is-1">Title here!</h1>
                <p> {this.state.text}</p>
                <input className="input is-rounded" onChange={this.handleInput} type="text" />
                
            </div>
        )
    }
}

export default Home;