import React from 'react';

//Here's an example on making a component: the footer! 
//See it's instance under App.js
class Footer extends React.Component {
    render = () => {
        return(
            <footer class="footer">
            <div class="content has-text-centered">
              <p>
                Built by UCLA's ACM TeachLA! 
                Made with  <a href="https://bulma.io/"><strong>Bulma</strong></a> and our odd humor.
              </p>
            </div>
          </footer>
        )
    }


}


//Always export default. 
export default Footer;