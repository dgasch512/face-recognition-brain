import React from 'react';
import Tilt from 'react-tilt';
import './logo.css';
import brain from './brain.png';


const Logo = () => {
  return (
    <div className="ma4 mto">
      <Tilt className="Tilt br2 shadow-2" options={{ max : 45 }} style={{ height: 120, width: 110 }} >
        <div className="Tilt-inner pa3">
          <img style={{paddingTop: '5px'}} alt='logo' src={brain} />
        </div>
      </Tilt>
    </div>
  )
}

export default Logo;