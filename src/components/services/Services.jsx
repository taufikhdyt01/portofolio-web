import React, { useEffect } from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
import Aos from 'aos'
import "aos/dist/aos.css"

const Services = () => {
  useEffect(() => {
    Aos.init({})
  })
  return (
    <section id='services'>
      <h5 data-aos="fade-down" data-aos-duration="500" >What I Offer</h5>
      <h2 data-aos="fade-down" data-aos-duration="500" >Services</h2>

      <div className="container services__container">
        <article data-aos="fade-up" data-aos-duration="3000" className='service'>
          <div data-aos="zoom-in-down" data-aos-duration="1000" className="service__head">
            <h3>Frontend Development</h3>
          </div>

          <ul  className='service__list'>
            <li> 
              <BiCheck className='service__list-icon'/>
              <p>Develop a modern website appearance</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'/>
              <p>Develop responsive website appearance</p>
            </li><li> 
              <BiCheck className='service__list-icon'/>
              <p>Develop simple website display with HTML, CSS, JavaScript</p>
            </li><li> 
              <BiCheck className='service__list-icon'/>
              <p>Develop website appearance with HTML, CSS/SASS, JavaScript, Bootstrap</p>
            </li><li> 
              <BiCheck className='service__list-icon'/>
              <p>Develop website appearance with ReactJs and Bootstrap framework</p>
            </li>
          </ul>
        </article>
        {/* END OF UIUX */}
        <article data-aos="fade-up" data-aos-duration="2500"  className='service'>
          <div data-aos="zoom-in-down" data-aos-duration="1000" className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul  className='service__list'>
            <li> 
              <BiCheck className='service__list-icon'/>
              <p>Determine the problem to be solved</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'/>
              <p>Doing User Research to form a persona profile</p>
            </li><li> 
              <BiCheck className='service__list-icon'/>
              <p>Create a wireframe for consideration in design development</p>
            </li><li> 
              <BiCheck className='service__list-icon'/>
              <p>Create a mockup using figma or Adobe XD</p>
            </li><li> 
              <BiCheck className='service__list-icon'/>
              <p>Create prototypes so that users can see and interact with the user interface directly.</p>
            </li>
          </ul>
        </article>
        {/* END OF Frontend */}
        <article data-aos="fade-up" data-aos-duration="2800"  className='service'>
          <div data-aos="zoom-in-down" data-aos-duration="1000"  className="service__head">
            <h3>Data Scientist</h3>
          </div>

          <ul  className='service__list'>
            <li> 
              <BiCheck className='service__list-icon'/>
              <p>Prepare data with data cleaning and pre-processing methods until it is ready to be processed</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'/>
              <p>Analyzing big data using machine learning algorithms and deep learning with the python programming language</p>
            </li><li> 
              <BiCheck className='service__list-icon'/>
              <p>Create data visualizations to make it easier for clients to read analysis results</p>
            </li><li> 
              <BiCheck className='service__list-icon'/>
              <p>Collaborate with business, engineering and product teams.</p>
            </li>
          </ul>
        </article>
        {/* END OF data science */}
      </div>

    </section>
  )
}

export default Services