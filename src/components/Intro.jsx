import React from 'react'
import profilePhoto from "../assets/profilePhoto.jpg"

export default function Intro() {
  return (
    <div className='mt-20 flex  gap-20 items-center justify-center'>
       <div>
            <h1 className="text-4xl font-bold">Hi, I'm Avishek Paul</h1>
            <p className="mt-2 text-lg">I'm a software developer specializing in building (and occasionally designing) exceptional digital experiences.</p>
       </div>
       <div>
            <img src={profilePhoto} alt="A visual representation of Avishek Paul" className="mt-4 rounded-[60%] shadow-lg w-80 h-80" />
       </div>
    </div>
  )
}
