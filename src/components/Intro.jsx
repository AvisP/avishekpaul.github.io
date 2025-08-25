import React from 'react'
import profilePhoto from "../assets/profilePhoto.jpg"

export default function Intro() {
  return (
    <div className='mt-30 flex  gap-20 items-center justify-center'>
       <div className='w-3xl flex flex-col gap-5'>
            <h1 className="text-5xl font-bold">Hi, I'm Avishek Paul</h1>
            <p className="mt-2 text-lg font-extralight">I help people and organizations turn ideas into scalable, 
            impactful products through AI and thoughtful design. As Co-Founder & CTO of Speak Ai, 
            I lead the development of solutions that analyze over 1 million media files and support 180,000+ users worldwide.</p>
            <p className="mt-2 text-lg font-extralight">
                Focus on building software that solves real problems and delivers measurable outcomes, streamlining complexity 
                into simplicity. This work is guided by a core belief: technology should empower people to achieve more, not overwhelm them.
            </p>
            
       </div>
       <div>
            <img src={profilePhoto} alt="A visual representation of Avishek Paul" className="mt-4 rounded-[60%] shadow-lg w-100 h-100" />
       </div>

    </div>
  )
}
