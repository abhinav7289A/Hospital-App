import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../main'
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const Messages = () => {
  const [messages, setMessages] = useState([])
  const {isAuthenticated, setIsAuthenticated} = useContext(Context);

  useEffect(()=>{
     const fetchMessages = async()=>{
        try {
           const {data} = await axios.get("http://localhost:4000/api/v1/message/getall", { withCredentials: true });
           setMessages(data.messages)
        } catch (error) {
           console.log("Error Occured while fetching Messages", error)
        }
     };
     fetchMessages();
  }, [])

  if(!isAuthenticated){
     return <Navigate to={"/login"}/>
  }

  return (
    <section className='page messages'>
       <h1>MESSAGES</h1>
       <div className='banner'>
          {
            messages && messages.length > 0 ? (messages.map(element=> {
              return (
                 <div className='card'>
                     <div className="details">
                        <p>First Name: <span>{element.firstName}</span></p>
                        <p>Last Name: <span>{element.lastName}</span></p>
                        <p>Email: <span>{element.email}</span></p>
                        <p>Phone: <span>{element.phone}</span></p>
                        <p>Message: <span>{element.message}</span></p>
                     </div>
                 </div>
              )
            })) : (<h1>NO MESSAGES!</h1>)
          }
       </div>
    </section>
  )
}

export default Messages