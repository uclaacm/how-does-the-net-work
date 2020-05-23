import React from 'react';
import '../../App.css';
import home from '../../img/home.png';
import computer from '../../img/computer.png';
import router from '../../img/router.png';
import modem from '../../img/modem.png';
import isp from '../../img/isp.png';


function Home() {
    return <img src={{home}} alt="home" />
}

function Computer() {
    return <img src={{computer}} alt="computer" />
}

function Router() {
    return <img src={{router}} alt="router" />
}

function Modem() {
    return <img src={{modem}} alt="modem" />
}

function Isp() {
    return <img src={{isp}} alt="isp" />
}

class Train extends React.Component {
    constructor(props){
        super(props);
    }

    render = () => {
        return(
            <div class="content has-text-centered" className="train">
                <br></br>
                <br></br>
                <h1>There's a lot of hardware involved in accessing the internet. 
                    <br></br>
                    Mouse over any of the objects to learn ore about them</h1>
                <a><img style={{float:'left'}, {flex: 1, flexDirection:'column'}} className="resize-img" src={home} alt="home" /></a>
                <br></br>
                <a><center><img className="resize-img" src={computer} alt="computer" /> --> 
                    <img className="resize-img" src={router} alt="router" /> -->
                    <img className="resize-img" src={modem} alt="modem" /> -->
                    <img className="resize-img" src={isp} alt="isp" /> --> More routers

                </center></a>

            </div>
        )
    }

}

//Always export default. 
export default Train;