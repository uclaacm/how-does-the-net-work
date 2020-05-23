import React from 'react';
import '../../App.css';
import computer from '../../img/computer.png';

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
                <b>What is the internet?</b>
                <div>It's a way for computers to connect to other computers.</div>
                <div class="border">
                    <div style={{float:'left'}}>
                        <a><center><img src={computer} alt="computer" /></center></a>
                    </div>
                    <div style={{float:'right'}}>
                        <a><center><img src={computer} alt="computer" /></center></a>
                    </div>
                </div>
                <div className = "green-background" style={{float:'left'}}>The internet is actually a bunch of connections connecting computers to other computers.</div>
                <div className = "green-background" style={{float:'right'}}>Some of these computers host websites (like ours!)</div>
              </h2>
            </div>
        )
    }

}

//Always export default. 
export default Intro;