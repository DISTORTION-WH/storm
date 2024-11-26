import React, { useRef } from "react";
import img4 from '../../../data/4.jpg'
import '../../scroll/anim';
import '../../scroll/style.css';
import './style.css'

import conc from '../../../data/concept.jpg';
import rend from '../../../data/render.jpg';

import rez from '../../../data/rez.jpg';


function Stages() {
  return (
    <div>

<div className="photst">
  <div className="abus" id="uslugi">
<p className="beforeslide data-scrol" >О НАШЕЙ КОМПАНИИ И УСЛУГАХ</p>
<p className="stnad data-scrol" >  Storm - ваш надежный технический партнер для создания незабываемых впечатлений на вашем мероприятии. Мы специализируемся на техническом оснащении мероприятий, предлагая профессиональное звуковое и световое оборудование, сценические конструкции и светодиодные экраны. Наш опыт и качество услуг гарантируют, что ваше мероприятие проходит безупречно, будь то свадьба, корпоративное мероприятие, вечеринка, показ или презентация.</p><br/>
</div>


<p className="beforeslide data-scrol">ЭТАПЫ РАЗРАБОТКИ</p>

<div className="ph data-scrol"> 

            <div className='firstph'>
                <p className="img1t">Первым этапом работы является создания концепта расположения оборудования.
                 Благодаря этому, мы сразу можем оценить количество
                оборудования, которое будет необходимо для создания качественного и запоминающегося освещения. Также с помощью нее строится примерный макет реализации желаний клиента.</p>
                <hr className="hr1"/>
                <img src={conc} className="imgg1" />



                <hr/>

            </div>

            <div className='secondph'>
                <p className="img2t">Следующим этапом в достижении результата является создания рендера. На этом этапе мы делаем акцент на используемом оборудовании</p>
                <hr/>

                <img src={rend} className="imgg2" />
                <hr/>

                <p className="img2t">Это позволяет найти обьекты, на которые мы должны сделать акцент, выделить сцену, а так же артиста</p>
            </div>

            <div className='thirdph'>
                <p className="img3t">Последним этапом можно назвать <br/> само мероприятие, на нем вы в полной мере можете насладиться проделанной нами работой, увидеть как сильно свет влияет на восприятие информации, отправляемой со сцены. Все работы всегда фиксируются командой STORM, что позволяет вам увидеть примеры наших работ<br/></p>
                <hr className="hr3"/>
                <img src={rez} className="imgg3" />
                <hr/>
            </div>
</div>

</div>
<br/><br/><br/><br/><br/><br/>
<div className="centb data-scrol">
<button className="more"> Услуги
</button>
</div>
    </div>
  );
}
export default Stages;
