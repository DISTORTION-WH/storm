import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './style.css';
import '../../scroll/anim';
import '../../scroll/style.css';
function showMessage() {
  alert("сообщение успешно отправлено");
  }

function Form() {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('storm_product', 'strom', form.current, '3A9WAHLOv1QtZtCGS')
            .then((result) => {
                console.log(result.text);
                console.log("message sent!")
            }, (error) => {
                console.log(error.text);
                console.log("error sending message, try again!")
            });
        };



      


        

    return(
        <div>    
    <form ref={form} onSubmit={sendEmail} className="form data-scrol">
        <input  name='from_name' type="email" placeholder='Email' required className='mal' />
        <textarea name='message' placeholder='Напишите сообщение...' required className='wrm'></textarea>
        <button class="btn" onClick={showMessage}>Отправить сообщение</button>
    </form>
  </div>
    );
  }
  export default Form;
