import React from 'react'
import profilePhoto from "../assets/profilePhoto.jpg"
import githubIcon from "../assets/icons/icons8-github.svg"
import linkedinIcon from "../assets/icons/linkedin.svg"
import mailIcon from "../assets/icons/mail.svg"

export default function Intro() {
  return (
    <div className='mt-30 flex  gap-20 items-center justify-center'>
       <div className='w-3xl flex flex-col gap-5'>
            <h1 className="text-5xl font-bold">Hi, I'm Avishek Paul</h1>
            <div className='flex flex-col gap-4 text-lg '>
              <p>
                I help people and organizations turn ideas into scalable, 
              impactful products through AI and thoughtful design. As Co-Founder & CTO of Speak Ai, 
              I lead the development of solutions that analyze over 1 million media files and support 180,000+ users worldwide.</p>
              <p>
                  Focus on building software that solves real problems and delivers measurable outcomes, streamlining complexity 
                  into simplicity. This work is guided by a core belief: technology should empower people to achieve more, not overwhelm them.
              </p>
              <div className='italic bg-[#f0f6ff] p-3 mt-2 border-l-4 border-l-[#4b94dd]'>
                Empowering people and organizations to build scalable, meaningful solutions with AI, focused on real results, not just technology.
              </div>
            </div>
            <button className='px-4 py-2 bg-[#4b94dd] text-white rounded hover:bg-[#3a76c2] w-fit mt-4 cursor-pointer font-semibold text-lg'>
              Schedule a chat
            </button>
            <div className='flex gap-5 items-center'>
              <div className='text-sm text-gray-500'>Connect with me:</div>
              <div className='flex gap-4 '>
                <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                  <img src={mailIcon} alt="Twitter" className='w-7' />
                </a>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                  <img src={linkedinIcon} alt="LinkedIn" className='w-7' />
                </a>
                <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                  <img src={githubIcon} alt="GitHub" className='w-7' />
                </a>
              </div>
            </div>
       </div>
       <div>
            <img src={profilePhoto} alt="A visual representation of Avishek Paul" className="mt-4 rounded-[60%] shadow-lg w-100 h-100" />
       </div>

    </div>
  )
}
