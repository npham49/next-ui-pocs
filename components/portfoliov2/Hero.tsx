/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const Hero = () => {
  return (
    <div id="top" className=" from-primary to-secondary text-primary-content -mt-[4rem] grid place-items-center items-end bg-gradient-to-br pt-20 pb-24">
        <div className="hero-content col-start-1 row-start-1 w-full max-w-7xl flex-col justify-between gap-10 pb-28 lg:flex-row-reverse lg:items-end lg:gap-0 xl:gap-20">
          <div className="hero-content text-center lg:text-left flex-col lg:flex-row-reverse">
            <div className="mockup-window border bg-base-300 w-1/2 bg-opacity-60 max-w-lg shadow-2xl">
              <img
                src="https://placeimg.com/1000/1000/arch"
                className=" max-w-lg w-full"
                alt="Headshot"
              />
            </div>

            <div className="w-full lg:w-2/3">
              <h1 className="text-5xl font-bold">
                Hi! I'm <b className="text-accent">Brian Pham</b> :)
              </h1>
              <div className="py-6 text-lg">
                <p>
                  I'm a <b className='text-accent'>Fourth Year Computer Science</b> student at the University
                  of Victoria with <b className='text-accent'>1 year of experience</b> in professional
                  <b className='text-accent'> Full-Stack Web Development</b>.
                </p>
                <p>
                  I'm passionate about creating <b className='text-accent'>Functional and Scalable Web
                  Applications</b> with a beautiful <b className='text-accent'>User Interface</b>.
                </p>
                <p>
                  I've also done some <b className='text-accent'>freelance work for small businesses</b>. You
                  can find my works below!
                </p>
              </div>
              <button className="btn btn-accent mr-4">Get Resume</button>
              <button className="btn btn-secondary">Contact Me</button>
              <div className="mockup-code w-[96px] mt-24 mb-[-24px] mx-auto lg:ml-20">
                <pre data-prefix="$">
                  <code>npm i brianpham</code>
                </pre>
                <pre data-prefix=">" className="text-warning">
                  <code>installing...</code>
                </pre>
                <pre data-prefix=">" className="text-success">
                  <code>Done!</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Hero