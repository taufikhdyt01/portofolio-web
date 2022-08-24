import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download data-aos="fade-down-right" data-aos-duration="3000" className='btn'>Download CV</a>
        <a href="#contact" data-aos="fade-down-left" data-aos-duration="3000" className='btn btn-primary'>Let's Talk</a>

    </div>
  )
}

export default CTA
