import React, { Component } from 'react';
import logo from './logo.jpg'
import './style.css'
import { Link } from 'react-router-dom';
export default class Header extends Component {
  render() {
   
    return(
     <div>
      
<header className="header">
  <div className="container">
    <nav className="nav">
      <div  className="logo">
        <img src={logo} className='logo'/>
      </div>
    

      <div className="menu__wrapper">
        <ul className="menu">
          <li className="item active">
            <a href="#" className='tcol'>О нас</a>
          </li>
          <li className="item">
            <a href="#uslugi" className='tcol'>Услуги</a>
          </li>
          <li className="item">
           <Link to = "/galery"><a href="#" className='tcol'>Портфолио</a></Link> 
          </li>
          <li className="item">
            <a href="#contacts" className='tcol'>Контакты</a>
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
    );
  }
}



