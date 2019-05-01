import React, { Component } from 'react';
import Particles from 'react-particles-js'; 
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
// import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Footer from './components/Footer/Footer';
// import Rank from './components/Rank/Rank';
import './App.css';


const app = new Clarifai.App({
  apiKey: '55d1fa76d1314a74bc70f5d8ad285b64'
 });

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {}
    }
  }

  calculateFaceLocation = (data) => {

    let regions = data.outputs[0].data.regions;

    const faceArr = regions.map(face => {
      let clarifaiFace = face.region_info.bounding_box;
      const image = document.getElementById('inputimage');
      const width = Number(image.width);
      const height = Number(image.height);

      return {
        left: clarifaiFace.left_col * width,
        top: clarifaiFace.top_row * height + 40,
        right: width - (clarifaiFace.right_col * width),
        bottom: height - (clarifaiFace.bottom_row * height) - 10
      }
    }) 
    return faceArr;
  }

  displayFaceBox = (box) => {
      this.setState({box: box})
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({box: {}})
    this.setState({imageUrl: this.state.input})

    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL, 
        this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => alert("There is no detectable faces. Try another one"))
  }


  render() {
    return (
        <div className="App">

          <Particles className='particles'
            params={particlesOptions} 
          />
          {/* <Navigation /> */}
          <Logo />
          {/* <Rank /> */}
          <ImageLinkForm box={this.state.box} onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
          <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/> 
          <Footer className='footer'/>
          
        </div>
    );
  } 
}

export default App;
