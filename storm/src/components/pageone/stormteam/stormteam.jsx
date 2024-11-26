import React, { useRef } from "react";
import collage from '../../../data/collage.jpg'
import './style.css';
import '../../scroll/anim';
import '../../scroll/style.css';
function StormTeam() {
  
  return (
    <div>
<div className="all">
      <img src={collage} className="collage" />
      <div className="tbut">
<p className="t data-scrol">Наши социальные сети</p>
</div>





<div className="tbut data-scrol">
<div className="links">


<button className="more"> Instagram
</button>
<button className="more"> Telegram
</button>
<button className="more"> Mail
</button>
<button className="more"> Phone
</button>
</div>
</div>





</div>






    </div>
  );
}
export default StormTeam;
