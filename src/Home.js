import React from "react";

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
                <p>{this.state.text}</p>
                <input onChange={this.handleInput} type="text" />
            </div>
        )
    }
}

export default Home;