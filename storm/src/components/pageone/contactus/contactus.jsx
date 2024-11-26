import React, { useRef } from "react";
import Form from '../form/form'
import './style.css';
import '../../scroll/anim.js';
import '../../scroll/style.css';
function StormTeam() {
  
  return (
    <div>
<p className="con data-scrol" id="contacts">Чтобы связаться с нами:</p>
<p className="phone data-scrol">+375298053856
</p>
<p className="cont data-scrol">Или заполните форму ниже. Наш опытный менеджер свяжется с вами для обсуждения всех деталей вашего мероприятия.</p>
<Form/>
    </div>
  );
}
export default StormTeam;
