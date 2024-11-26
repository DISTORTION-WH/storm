import React, { Component } from 'react';
import main from '../../../data/mainslide/main.mp4'
import './style.css'
import CenterMode from '../header/slider'

export default class Mainslide extends Component {
  
  render() {

    return(
     <div>

      <p className='beforeslide'>STORM PRODUCT</p>
      <p className='textslide'>STAGE DESIGN | LIGHTING DESIGN | SHOW PROGRAMMING | VIDEO CONTENT CREATION | TECHNICAL PRODUCTION </p> 
      <br/> 
      <div className="video"> 

      <video autoPlay loop muted>
           <source src={main} type="video/mp4" />
      </video>

      </div>
      <CenterMode/>





     </div>
    );
  }
}
