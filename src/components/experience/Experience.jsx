import React, { useEffect } from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import Aos from 'aos'
import "aos/dist/aos.css"

const Experience = () => {
  useEffect(() => {
    Aos.init({});
  })
  return (
    <section id='experiences'>
      <h5 data-aos="fade-down" data-aos-duration="500">What Skill I Have</h5>
      <h2 data-aos="fade-down" data-aos-duration="500">My Experiences</h2>

      <div className="container experience__container">
        <div data-aos="zoom-out-right" data-aos-duration="2500" className="experience__frontend">
          <h3>Designer</h3>
          <div className="experience__content">
          <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
             <div>
                <h4>Join the UI/UX design team</h4>
                <small className='text-light'>Designing UI/UX designs for clients</small> <br />
                <small className='text-light'>Designing UI/UX designs for competitions</small>
             </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Junior Designer at Gebyog Wedding Art</h4>
                <small className='text-light'>Designing address plans on wedding invitations, designing souvenir and delivery accessories</small>
              </div>
            </article>
            
            
            
          </div>
          

        </div>
        <div data-aos="zoom-out-left" data-aos-duration="3000"  className="experience__backend">
        <h3>Deta Scientist</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Join a research collaboration team</h4>
                <small className='text-light'>Analyze text that comes from a review of an application using machine learning and deep learning algorithms</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
             <div>
                <h4>Practical assistant for Database Systems course</h4>
                <small className='text-light'>Helping lecturers in providing practical material in the laboratory</small>
             </div>
            </article>
            
          </div>
          
        </div>
      </div>

    </section>
  )
}

export default Experience