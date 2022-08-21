import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaDribbbleSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div data-aos="fade-right" data-aos-duration="3000" className='header__socials'>
        <a href="https://www.linkedin.com/in/ahmad-rais-dwijaya-98949b248/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/RaisJaya" target="_blank"><FaGithub/></a>
        <a href="https://dribbble.com/Raisjaya_dj" target="_blank"><FaDribbbleSquare/></a>

    </div>
  )
}

export default HeaderSocials