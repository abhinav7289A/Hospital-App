import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className='conatiner biography'>

       <div className='banner'>
          <img src={imageUrl} alt="aboutImg"/>
       </div>

       <div className='banner'>
           <p>Biography</p>
           <h3>Who We are ?</h3>
           <p>
           Our team of highly skilled physicians, nurses, and support staff are united by a common goal: to improve the lives of our patients through comprehensive, personalized healthcare services. From preventive care and diagnostics to advanced treatments and rehabilitation, we offer a full spectrum of medical specialties and services to meet the diverse needs of our community.
           </p>
           <p>
           At the heart of MediCare Hospitals is our unwavering commitment to patient satisfaction and safety. We prioritize open communication, respect for individual preferences, and a supportive environment where patients feel valued and empowered to take control of their health journey.
           </p>
           <p>
           We are proud to serve as a trusted partner in health and wellness, collaborating with local organizations, schools, and businesses to promote health education, disease prevention, and community outreach initiatives.
           </p>
       </div>

    </div>
  )
}

export default Biography