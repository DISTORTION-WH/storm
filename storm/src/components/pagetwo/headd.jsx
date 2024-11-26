import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './headdstyle.css'
function Headd() {
return (
<div >


<header className="header">
  <div className="container">
    <nav className="nav">
      <div className="menu__wrapper">
        <ul className="menu">
          <li className="item ">
           <Link to ="/"><a href="#" className='tcol'>Главная</a></Link>
          </li>
          <li className="item ">
           <Link to ="/festivals"> <a href="#" className='tcol'>Фестивали</a></Link>
          </li>
          <li className="item ">
          <Link to ="/fashion"> <a href="#" className='tcol'>Показы мод</a></Link>
          </li>
          <li className="item ">
           <Link to = "/concerts"><a href="#" className='tcol'>Концерты</a></Link> 
          </li>
          <li className="item ">
          <Link to ="/corporate"><a href="#" className='tcol'>Корпоративы</a></Link>
          </li>
         
        </ul>
      </div>

      <div className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  </div>
</header>
</div>
)
}
export default Headd;











