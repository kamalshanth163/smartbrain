import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = ({ onInputChange, onButtonSubmit, box, onCancel }) => {

  var status = '';
  for (var i = 0; i < box.length; i++) {

    if (box.length === 1){
      status = <p>Nice! {box.length} face detected</p>
    } else if (box.length > 20) {
      status = <p>Huge Huge Huge!!! {box.length} faces detected.. Can u even believe it??</p>
    } else if (box.length > 10) {
      status = <p>Holy moly!! {box.length} faces detected.. How cool is that :)</p>
    } else if (box.length > 5) {
      status = <p>Woohooo!!! {box.length} faces detected</p>
    } else if (box.length > 1){
      status = <p>Yeh! {box.length} faces detected</p>
    } else if (status === ' ') {
      status = <p>The Photo has no faces. Try another one..</p>
    } else {

    }  
  }


  return (
    <div className='ma5' style={{marginTop: '-70px'}} >
      <p className='f4 pt4 note'>
        {'Hey there! I will detect faces in your pictures. Give it a try :)'}
      </p>
      
        {status}
      
      <div className='center'>
        <div className='center pa0 br0 form'>
          <input id='input' type="text" placeholder="Image URL..." className='input shadow-5' onChange={onInputChange}/>
          <button className='button shadow-5' onClick={onButtonSubmit}>Detect</button>
        </div>
      </div> 
    </div>
  );
}

export default ImageLinkForm;