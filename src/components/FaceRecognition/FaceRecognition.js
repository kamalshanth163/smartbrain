import React from 'react';
import './FaceRecognition.css';


const FaceRecognition = ({ imageUrl, box }) => {

  var allfaces = [];
  for (var i = 0; i < box.length; i++) {
      allfaces.push(<div className='bounding-box' style={box[i]} key={i}></div>);
  }

  return (    
    <div className='img center ma'>
      <div className='absolute'>
        <img id='inputimage' className='center' src={imageUrl} alt='' width='600px' height='auto'/>
        
        {allfaces}
      </div>
    </div>
  )
}

export default FaceRecognition;