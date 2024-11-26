import React, { useRef } from 'react';
import Header from './header/header'
import './styles/mainslide/mainslide.css'
import './styles/header/header.css'
import './styles/all/all.css'
import Mainslide from './mainslide/mainslide';
import Stages from './stages/stages'
import StormTeam from './stormteam/stormteam'
import ContactUs from './contactus/contactus'
import './style.css'


function Main() {
 
    
return (
<div className='main'>
<Header  />
<hr/>
<Mainslide />
<Stages />
<StormTeam />
<ContactUs />
</div>
)
}
export default Main;









