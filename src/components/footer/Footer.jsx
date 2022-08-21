import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {SiInstagram} from 'react-icons/si'
import {FaTiktok} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {BsHeartFill} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>AHMADRAISJAYA</a>

      <div className="footer__socials">
        <a href="https://www.facebook.com/achmad.r.jaya.7/" target='_blank'><FaFacebookF/></a>
        <a href="https://instagram.com/raisjaya_dj?igshid=YmMyMTA2M2Y=" target='_blank'><SiInstagram/></a>
        <a href="https://twitter.com/Ahmad_RDJ?t=xqmSX4fOxoF29i3rrFiJEg&s=09" target='_blank'><BsTwitter/></a>
        <a href="https://vt.tiktok.com/ZSRrX9ayn/?k=1"><FaTiktok/></a>

      </div>

      <div className="footer__copyright">
        <small>Create with <BsHeartFill/> by Ahmad Rais </small>
      </div>
    </footer>
  )
}

export default Footer