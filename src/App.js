import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import { render } from '@testing-library/react';


// const raw = JSON.stringify({
//   "user_app_id": {
//         "user_id": "{}",
//         "app_id": "{26a31f1553574a7e926b8a1493dcbdf4}"
//     },
//   "inputs": [
//     {
//       "data": {
//         "image": {
//           "url": "https://samples.clarifai.com/metro-north.jpg"
//         }
//       }
//     }
//   ]
// });

// const requestOptions = {
//   method: 'POST',
//   headers: {
//     'Accept': 'application/json',
//     'Authorization': 'Key {f953d59732f14863aed5a507528ce503}'
//   },
//   body: raw
// };

// // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
// // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
// // this will default to the latest version_id

// fetch("https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/versions/{MODEL_VERSION_ID}/outputs", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(JSON.parse(result, null, 2).outputs[0].data))
//   .catch(error => console.log('error', error));

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: true,
      value_area: 800
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('Click');
    // app.models.predict("")
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles'
          params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
         onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}/>
        {/* <FaceRecognition />} */}
      </div>
    );
  }
}
export default App;
