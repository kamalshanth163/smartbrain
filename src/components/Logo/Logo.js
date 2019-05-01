import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain50.png';
import './Logo.css';
 

const Logo = () => {
  return (
    <div className='ma5 center' style={{marginTop: '-70px'}} >
      <Tilt className="Tilt br2 shadow-2" options={{ max : 50 }} style={{ height: 80, width: 80 }} >
        <div className="Tilt-inner pa3">
          <img style={{paddingTop: '0px'}} src={brain} alt='logo'/>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;