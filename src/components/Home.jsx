import React from 'react'
import'../styles/home.css';

import img1 from '../assets/construction.jpg'
import img2 from '../assets/img2.jpeg'
import img3 from '../assets/img3.jpeg'
import img4 from '../assets/img4.jpeg'
import img5 from '../assets/img5.jpeg'
import img6 from '../assets/img6.jpeg'
import one from '../assets/one.jpeg'
import two from '../assets/two.jpeg'
import ship from '../assets/ship.jpg'

export const Home = () => {
  return (
    <>
    <div id="home">
    <section class="text-section">
        <div className='heading'>
            <h1>ABCD</h1>
            <h1 class="h1">COMPANY</h1>
        </div>
        <div>
            <button class="btn1">&larr;</button>
            <button class="btn2">&rarr;</button>
        </div>
    </section>
    <section class="construction-img">
        <img src={img1} alt="rghnsrgh" />
        <button class="img-btn">read more &nbsp; &rarr;</button>
    </section>
</div>


    <div className="image-layout">
    <div className="image-containers">
        <section className="left-images">
        <img className="img2" src={img2} alt="Image 1" />
        <img className="img3" src={img4} alt="Image 3" />
        </section>
        <section className="right-image">
        <img className="img4" src={img3} alt="Image 2" />
        </section>
    </div>

      <div className="text-container">
        <h2>About</h2>
        <p>Write your message.  .Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
       
        <button className='read'>read more &rarr; </button>
      </div>
      
    </div>


    <div class='info'>
    <h1 class='mission'>Mission Statement</h1>
    <div class='info-content'>
        <section class='info-item'>
            <h2>1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</p>
        </section>
        <section class='info-item info-itemx'>
            <h2>2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor.</p>
        </section>
    </div>
</div>


<div class='our-project'>
    <h1 class='project-heading'>Our Projects</h1>
    <section class='project-container'>
        <div class="project-item">
            <div class="image-container">
                <img class='project-image' src={img5} alt="Project Genesis" />
                <div class="project-overlay">
                    <h2>Project <br /> Genesis</h2>
                    <button>View More &rarr;</button>
                </div>
            </div>
        </div>
        <div class="project-item">
            <div class="image-container">
                <img class='project-image' src={img6} alt="" />
            </div>
        </div>
    </section>
</div>

    </>
    
  )
}
