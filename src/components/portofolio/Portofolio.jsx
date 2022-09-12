import React, { useEffect } from 'react'
import './portofolio.css'
import IMG1 from '../../assets/DaraWedding.png'
import IMG2 from '../../assets/BussinesStrategy.png'
import UIUX1 from '../../assets/RenscoApp.png'
import UIUX2 from '../../assets/GebyogWeddingArt.png'
import UIUX3 from '../../assets/EmokaKatalog.png'
import DS1 from '../../assets/DS1.png'

import Aos from 'aos'
import "aos/dist/aos.css"


//aray draf portofolio

// const data = [
//   {
//     id: 1,
//     image: IMG1,
//     title: "Crypto Currency Dashboard",
//     github: 'https://github.com',
//     demo:'https:dribble.com'

//   },
//   {
//     id: 2,
//     image: IMG2,
//     title: "Crypto Currency Dashboard",
//     github: 'https://github.com',
//     demo:'https:dribble.com'
//   },
//   {
//     id: 3,
//     image: IMG3,
//     title: "Crypto Currency Dashboard",
//     github: 'https://github.com',
//     demo:'https:dribble.com'
//   }
// ]

const Portofolio = () => {
  useEffect(() => {
    Aos.init({});
  })
  return (
    <section id='portofolio'>
      <h5 data-aos="fade-down" data-aos-duration="500" >My Recent Work</h5>
      <h2 data-aos="fade-down" data-aos-duration="500">Portofolio</h2>

      <h3 data-aos="fade-up" data-aos-duration="1000" className='title__portosection'>Frontend Development</h3>
      <div className="container portofolio__container">
            <article data-aos="zoom-in-down" data-aos-duration="3000" className="portofolio__items">
              <div className="portofolio__items-image">
                <img src={IMG1} alt="Portofolio1" />
              </div>
              <h3>Wedding Planner Website - Dara Wedding</h3>
              <div className="portofolio__items-cta">
                <a href='https://github.com/RaisJaya/Wedding-Planner-Website---Dara-Wedding' className='btn'target='_blank'>Github</a>
                <a href='https://dribbble.com/shots/19105221-Wedding-Planner-Website-Dara-Wedding' className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>

            <article data-aos="zoom-in-down" data-aos-duration="3000" className="portofolio__items">
              <div className="portofolio__items-image">
                <img src={IMG2} alt="Portofolio1" />
              </div>
              <h3>Business Strategy Landing Page</h3>
              <div className="portofolio__items-cta">
                <a href='https://github.com/RaisJaya/Bussines-Strategy---Landing-Page' className='btn'target='_blank'>Github</a>
                <a href='https://dribbble.com/shots/19100284-Business-Strategy-Landing-Page' className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>

      </div>

      <h3 data-aos="fade-up" data-aos-duration="1000"   className='title__portosection'>UI/UX DESIGNER</h3>
      <div className="container portofolio__container">
            <article data-aos="zoom-in-down" data-aos-duration="3000"className="portofolio__items">
              <div className="portofolio__items-image">
                <img src={UIUX1} alt="Portofolio1" />
              </div>
              <h3>Scooter Rental App</h3>
              <div className="portofolio__items-cta">
                <a href='https://dribbble.com/shots/19105499-Scooter-Rental-App' className='btn'target='_blank'>Dribbble</a>

              </div>
            </article>

            <article data-aos="zoom-in-down" data-aos-duration="3000" className="portofolio__items">
              <div className="portofolio__items-image">
                <img src={UIUX2} alt="Portofolio1" />
              </div>
              <h3>E-commerce - Gebyog Wedding Art Landing Page</h3>
              <div className="portofolio__items-cta">
                <a href='https://dribbble.com/shots/19100260-E-commerce-Gebyog-Wedding-Art-Landing-Page' className='btn'target='_blank'>Dribbble</a>

              </div>
            </article>

            <article data-aos="zoom-in-down" data-aos-duration="3000" className="portofolio__items">
              <div className="portofolio__items-image">
                <img src={UIUX3} alt="Portofolio1" />
              </div>
              <h3>Catalog Website - Emoka Convection</h3>
              <div className="portofolio__items-cta">
                <a href='https://dribbble.com/shots/19110946-Catalog-Website-Emoka-Convection' className='btn'target='_blank'>Dribbble</a>
              </div>
            </article>

      </div>

      <h3 data-aos="fade-up" data-aos-duration="1000"   className='title__portosection'>DATA SCIENTIST</h3>
      <div className="container portofolio__container">
            <article data-aos="zoom-in-down" data-aos-duration="3000" className="portofolio__items">
              <div className="portofolio__items-image">
                <img src={DS1} alt="Portofolio1" />
              </div>
              <h3>Implementation of the Naive Bayes Classifier Algorithm in the prediction of stroke</h3>
              <div className="portofolio__items-cta">
                <a href='https://github.com/RaisJaya/Stroke-Prediction-With-Naive-Bayes' className='btn'target='_blank'>Github</a>
               
              </div>
            </article>

            {/* <article data-aos="zoom-in-down" className="portofolio__items">
              <div  className="portofolio__items-image">
                <img src={IMG2} alt="Portofolio1" />
              </div>
              <h3>Project UI Design By FIgma</h3>
              <div className="portofolio__items-cta">
                <a href='https://github.com' className='btn'target='_blank'>Github</a>
                
              </div>
            </article>

            <article data-aos="zoom-in-down" className="portofolio__items">
              <div className="portofolio__items-image">
                <img src={IMG3} alt="Portofolio1" />
              </div>
              <h3>Project UI Design By FIgma</h3>
              <div className="portofolio__items-cta">
                <a href='https://github.com' className='btn'target='_blank'>Github</a>
                
              </div>
            </article> */}

      </div>
    </section>
  )
}

export default Portofolio