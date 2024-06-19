import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../main'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const Doctors = () => {
  const [doctors, setDoctors] = useState([])
  const {isAuthenticated, setIsAuthenticated} = useContext(Context)
  
  useEffect(()=> {
      const fetchDoctors = async()=> {
          try {
             const {data} = await axios.get("http://localhost:4000/api/v1/user/doctors", {withCredentials: true});
             setDoctors(data.doctors)
          } catch (error) {
             toast.error(error.response.data.message)
          }
      }
      fetchDoctors()
  }, []);

  if(!isAuthenticated){
     return <Navigate to={"/login"}/>
  }

  return (
    <>
       <section className='page doctors'>
           <h1>DOCTORS</h1>
           <div className="banner">
              {
                doctors && doctors.length > 0 ? (doctors.map(element=>{
                  return (
                     <div className="card">
                        <img src={element.docAvatar && element.docAvatar.url} alt="Doc-Image"/>
                        <h4>{`${element.firstName} ${element.lastName}`}</h4>
                        <div className="details">
                            <p>Email: <span>{element.email}</span></p>
                            <p>Name: <span>{element.firstName} {element.lastName}</span></p>
                            <p>Phone Number: <span>{element.phone}</span></p>
                            <p>Speciality: <span>{element.doctorDepartment}</span></p>
                            <p>Gender: <span>{element.gender}</span></p>
                            
                        </div>
                     </div>
                  )
                })) : <h1>OOPS! NO Registered Doctors Found!</h1>
              }
           </div>
       </section>
    </>
  )
}

export default Doctors