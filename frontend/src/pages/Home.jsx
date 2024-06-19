import React from 'react'
import Hero from "../components/Hero"
import Biography from "../components/Biography"
import Departments from"../components/Departments"
import MessageForm from "../components/MessageForm"

const Home = () => {
  return (
    <div>
       <Hero title={"Welcome To MediCare Hospitals | Your Trusted Healthcare Provider since 1980"} imageUrl={"/hero.png"} />
       <Biography imageUrl={"/about.png"}/>
       <Departments/>
       <MessageForm/>

    </div>
  ) 
}

export default Home