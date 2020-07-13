import React from 'react';
import '../../App.css';
import computer from '../../img/computer.png';
import router from '../../img/router.png';
import modem from '../../img/modem.png';
import isp from '../../img/isp.png';

import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Train extends React.Component {
    render = () => {
        return(
            <div class="content has-text-centered" className="train">
                <br></br>
                <br></br>
                <h1>There's a lot of hardware involved in accessing the internet. 
                    <br></br>
                    Mouse over any of the objects to learn ore about them</h1>
                <FontAwesomeIcon icon={faHome} size="8x" transform="left-35"></FontAwesomeIcon>
                <br></br>
                <center><img className="resize-img" src={computer} alt="computer" /> --> 
                    <img className="resize-img" src={router} alt="router" /> -->
                    <img className="resize-img" src={modem} alt="modem" /> -->
                    <img className="resize-img" src={isp} alt="isp" /> --> More routers

                </center>

            </div>
        )
    }

}

//Always export default. 
export default Train;