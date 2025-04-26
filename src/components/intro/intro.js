import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnimg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
      <div className='introcontent'>
      <span className='Hello'>Hello</span>
      <span className='introText'>Im <span className='introname'>Sanjay</span><br /> Website Designer</span>
      <p className='introPara'> I'm a skilled-based web developer — I can build responsive,<br /> high-performance websites using React.js. <br /> Whether it's a sleek portfolio or a dynamic business site,<br /> I bring your ideas to life with clean code and </p>
      <Link><button className='btn'><img src={btnimg} alt='' className='btnimg' />Hire Me</button></Link>
      </div>
      <img src={bg} alt='' className='bg' />
    </section>
  )
}

export default Intro;