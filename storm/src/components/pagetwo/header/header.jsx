import './style.css';
import AsNavFor from '../../pageone/header/slider';
import React, { Component } from 'react';

class Header extends Component{
  componentDidMount() {
    // Выполнить скролл на один пиксель после монтирования компонента
    window.scrollBy(0, 1);
  }

render (){
  return(
<div >

<p className='hhead'>Портфолио</p>
<p className='afterhead'>Наша команда обладает огромным опытом, с которым вы можете ознакомиться, выбрав интересующие вас мероприятия.</p>
<div className='vis'>










  <AsNavFor/>
  </div>

</div>
  );
}
}
export default Header;