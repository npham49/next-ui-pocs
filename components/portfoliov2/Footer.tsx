import React from 'react'
import { BsInstagram,BsLinkedin,BsGithub } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <a className="link link-hover" href='#experience'>Experience</a> 
        <a className="link link-hover" href='#projects'>Projects</a> 
        <a className="link link-hover" href='#about'>About</a> 
        <a className="link link-hover" href='#contact'>Contact me</a>
      </div> 
      <div>
        <div className="grid grid-flow-col gap-4">
          <a className=' cursor-pointer'><BsInstagram/></a>
          <a className=' cursor-pointer'><BsLinkedin/></a>
          <a className=' cursor-pointer'><BsGithub/></a>
        </div>
      </div> 
      <div>
        <p>This site was designed and developed by Brian Pham, using NextJS, Tailwind CSS and DaisyUI.</p>
      </div>
    </footer>
  )
}

export default Footer