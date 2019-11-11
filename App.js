import React from 'react';
import './Slider.css';
import Slider from './Slider-Numbers'
import SliderString from './Slider-String';

class App extends React.Component{

  render(){
    return(
      <div>
        <Slider />
        <SliderString />
      </div>
    )
  }
}

export default App;
