import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Footer() {

  const [currentTime,SetCurrentTime]=useState(new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }));

  //show time every 1 min
  setInterval(() => {
    var time = new Date();
    SetCurrentTime(time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }));
  }, 1000);
  
    return (
       <footer>
        <p>made by Nipun <span style={{color:'red'}} >{currentTime}</span> </p>
      </footer>

    )

}

export default Footer;