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
          <h3>Frontend Developer</h3>
          <div className="experience__content">
          <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
             <div>
                <h4>Group leader from Dara Wedding Landing page</h4>
                <small className='text-light'>Successfully created a static catalog website for wedding organizers for the final project of a web programming course</small> <br /> <br />
                <small className='text-light'>Get a good final project score and get a satisfactory final course grade</small>
             </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Vice chairman of business landing page development</h4>
                <small className='text-light'>Successfully developing a website or landing page with the theme of business strategy in the 4.0 era</small> <br /> <br />
                <small className='text-light'>Won 2nd place in the landing page competition in a series of pima posma events at Amikom University of Yogyakarta</small>
              </div>
            </article> 
          </div>
        </div>

        <div data-aos="zoom-out-up" data-aos-duration="2500" className="experience__design">
          <h3>Designer</h3>
          <div className="experience__content">
          <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
             <div>
                <h4>Join the UI/UX design team</h4>
                <small className='text-light'>Successfully made a user interface design with the team to complete the Android programming course assignment and the information system design analysis course</small> <br />
                <br /><small className='text-light'>Get satisfaction from consumers in the design of the user interface for the landing page of the convection business</small>
             </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Junior Graphic Designer at Gebyog Wedding Art</h4>
                <small className='text-light'>Successfully designed an address plan on a wedding invitation, designed a wedding gift souvenir and accessories</small>
              </div>
            </article>
          </div>
        </div>
        <div data-aos="zoom-out-left" data-aos-duration="3000"  className="experience__ds">
        <h3>Data Scientist</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Join a research collaboration team</h4>
                <small className='text-light'>Conduct joint research with lecturers and teammates with cases Analysis of text derived from app reviews using machine learning and deep learning algorithms</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
             <div>
                <h4>Practical assistant for Database Systems course</h4>
                <small className='text-light'>Successfully assisting lecturers in providing practical material in the laboratory</small><br /> <br />
                <small className='text-light'>Assist more than 20 students in completing the final project of the database system course</small>
             </div>
            </article>
            
          </div>
          
        </div>
      </div>

    </section>
  )
}

export default Experience