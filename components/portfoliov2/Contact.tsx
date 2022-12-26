/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'

const Contact = () => {
  return (
    <div id='contact' className="text-accent-content max-w-5xl mx-auto hero min-h-[700px] bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-secondary">Contact me!</h1>
            <p className="pt-6">
              Fastest way to contact me would be through my socials.
            </p>
            <p className="pb-6">
              But I have also included a contact form. Just fill it out and I'll reply to your email!
            </p>
            <div className="btn-group mx-auto">
              <button className="btn btn-primary  text-2xl">
                <BsInstagram/>
              </button>
              <button className="btn btn-secondary text-2xl">
                <BsLinkedin/>
              </button>
              <button className="btn btn-accent text-2xl">
                <BsGithub/>
              </button>
            </div>
          </div>
          <div className=" text-primary-content card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea className="textarea textarea-bordered" rows={5} placeholder="Message"></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Contact</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Contact