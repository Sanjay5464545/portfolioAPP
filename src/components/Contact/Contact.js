import React, { useRef } from 'react'
import './Contact.css';
import walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';



function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault(); 

        emailjs
        .sendForm('service_haiulmp', 'template_5zf0add', form.current, {
          publicKey: 'bKn1k-k3tEGYkJms3',
        })
        .then(
          (result) => {
            console.log('SUCCESS!', result.text);
            e.target.reset();
            alert('Email Sent !')
          },
          (error) => {
            console.log('FAILED...', error.text);
          });
    };
 return (
   <section id="contactpage">
    <div id='clients'>
        <h1 className='contactPageTitle'>My clients</h1>
        <p className='clientDesc'>I have hada the opportunity to work with a diverse group of companies</p>
    <div className='clientImgs'>
        <img src={walmart} alt='Client' className='clientImg' />
        <img src={Adobe} alt='Client' className='clientImg' />
        <img src={Microsoft} alt='Client' className='clientImg' />
        <img src={Facebook} alt='Client' className='clientImg' />
     </div>
    </div>
    <div id='contact'>
        <h1 className='contactPagetitle'>Contact Me</h1>
        <span className='ContactDesc'>please fill out the form below to discuss any work opportunities</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type="text"  className='name' placeholder='your Name' name='from_name' />
            <input type="email"  className='Email' placeholder='your email' name='from_email' />
            <textarea className="msg" name="message" rows='5' placeholder='Yourmessage'></textarea>
            <button type='submit' value='send' className='submitBtn'>Submit</button>
            <div className='links'>
                <img src={FacebookIcon} alt='FacebookIcon' className='link' />
                <img src={TwitterIcon} alt='TwitterIcon' className='link' />
                <img src={YoutubeIcon} alt='YoutubeIcon' className='link' />
                <img src={InstagramIcon} alt='InstagramIcon' className='link' />
            </div>
        </form>
    </div>
   </section>
  )
}

export default Contact;