import React, { useEffect } from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

import Aos from 'aos'
import "aos/dist/aos.css"

const Header = () => {
  useEffect(() => {
    Aos.init({});
  })
  return (
    <header>
      <div className="container header__container">
        <h5 data-aos="zoom-in-up" data-aos-duration="1000" >Hello I'm</h5>
        <h1 data-aos="zoom-in-up" data-aos-duration="1200">Ahmad Rais Dwijaya</h1>
        <h5 data-aos="fade-down" data-aos-duration="4500" className="text-light" >Frontend Developer | UI UX Designer | Data Scientist</h5>
        <CTA />
        <HeaderSocials/>

        <div data-aos="zoom-in-down" data-aos-duration="1000" className="me">
          <img data-aos="zoom-in-up" data-aos-duration="2500"  src={ME} alt="" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header