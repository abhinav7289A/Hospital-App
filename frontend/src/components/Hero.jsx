import React from 'react'

const Hero = ({title, imageUrl}) => {
  return (
    <div className='hero container'>

        <div className='banner'>
            <h1>{title}</h1>
            <p>
               At MediCare Hospitals, we are dedicated to providing exceptional healthcare services to our community, with a focus on patient-centered care and innovation. Our state-of-the-art facility is equipped with the latest technology and staffed by a team of highly skilled healthcare professionals who are committed to your well-being.
            </p>
        </div>

        <div className='banner'>
           <img src={imageUrl} alt='Hero' className='animated-image'/>
           <span>
              <img src="/Vector.png" alt="vector"/>
           </span>
        </div>

    </div>
  )
}

export default Hero