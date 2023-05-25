import React from 'react'
import  './about.css'
import ME from '../../assets/makan.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {HiOutlineFolderOpen} from 'react-icons/hi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2> About Me</h2>
<div className="container about__container">
  <div className="about__me">
<div className="about__me-image">
  <img src= {ME} alt="About Image" />
</div>
  </div>
  <div className="about__content">
<div className="about__cards">
  <article className='about__card'>
    <FaAward className='about__icon' />
    <h5>Experience</h5>
    <small>not working</small>
</article>

  <article className='about__card'>
  <FiUsers className='about__icon'/>
  <h5><a href=''>tugs</a> Clients</h5>
  <small>not working</small>
</article>

<article className='about__card'>
  <HiOutlineFolderOpen className='about__icon'/>
  <h5>Projects</h5>
  <small>not working</small>
</article>

</div>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente iusto tempora illo consectetur voluptatum rem, temporibus est alias. Quaerat, repellat nobis. Modi non eligendi nihil quisquam dignissimos nulla quam nostrum?</p>
 <a href="#contact" className='btn btn-primary'>Let's Talk</a>
  </div>
</div>

    </section>
  )
}

export default About