import React from 'react'
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

function Skills() {
  return (
   <section id='skills'>
    <span className='skillTitle'>What i Do</span>
    <span className='skillDesc'>I’m a skilled and passionate web designer dedicated to crafting visually stunning, intuitive, and user-centric websites. With expertise in HTML, CSS, JavaScript, and modern frameworks like React, I transform ideas into seamless digital experiences.</span>
    <div className='skillBars'>
        <div className='skillBar'>
            <img src={UIDesign} alt='UIDesign' className='skillBarImg' />
            <div className='skillBarText'>
                <h2>UI/UX Design</h2>
                <p>This is a demo test, you can write your own content</p>
            </div>
        </div>
        <div className='skillBar'>
            <img src={WebDesign} alt='WebDesign' className='skillBarImg' />
            <div className='skillBarText'>
                <h2>WebDesign</h2>
                <p>must can This is a demo test, you can write your own content</p>
            </div>
        </div>
        <div className='skillBar'>
            <img src={AppDesign} alt='AppDesign' className='skillBarImg' />
            <div className='skillBarText'>
                <h2>AppDesign</h2>
                <p>only can This is a demo test, you can write your own content </p>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Skills