import React, { useState, useEffect, useRef } from "react";
import './style1.css'
import fuji from '../../../data/fuji.JPG';
import lace from '../../../data/lovelace.jpg';
import conc from '../../../data/yanix.jpg';
import corp from '../../../data/corp.jpg';
import { Link } from 'react-router-dom';
import '../../scroll/anim';
import '../../scroll/style.css';




 function AsNavFor() {

  return (
    <div className="slider-container data-scrol">
<p className="virtualisations">Наши проекты</p>
 




      <div className="projs"> 
      <div className="phh"> 
      <Link to = "/festivals"> 
      <div class="hover-text-one">
  <figure class="effect-text-three">
    <img src={fuji} className="pht" alt=""/>
      <figcaption>
	<h4>ФЕСТИВАЛИ</h4>
	<p>FU-JI FEST <br/> PLAN B PARTY <br/>RANDOM <br/>BLESS <br/> </p>
      </figcaption>			
  </figure>
</div>
</Link>
      
</div>

<div className="phh"> 
<Link to = "/fashion"> 
      <div class="hover-text-one">
  <figure class="effect-text-three">
    <img src={lace} className="pht" alt=""/>
      <figcaption>
	<h4>ПОКАЗЫ МОД</h4>
	<p>Lovelace <br/>BFW <br/>MODERNCULT</p>
      </figcaption>			
  </figure>
</div>
</Link>
</div>

<div className="phh"> 
<Link to = "/concerts"> 
      <div class="hover-text-one">
  <figure class="effect-text-three">
    <img src={conc} className="pht" alt=""/>
      <figcaption>
	<h4>КОНЦЕРТЫ</h4>
	<p>Yanix<br/>KANYE WEST<br/>Trippie Redd<br/>Ice Cube<br/></p>
      </figcaption>			
  </figure>
</div>
</Link>
      
</div>

<div className="phh"> 
<Link to = "/corporate"> 
      <div class="hover-text-one">
  <figure class="effect-text-three">
    <img src={corp} className="pht" alt=""/>
      <figcaption>
	<h5>КОРПОРАТИВЫ</h5>
	<p>Issoft<br/>Issoft<br/>Issoft<br/>Issoft<br/></p>
      </figcaption>			
  </figure>
</div>
</Link>
      
</div>
      
      
      
      </div>
<br/><br/>
    </div>
  );
}

export default AsNavFor;
