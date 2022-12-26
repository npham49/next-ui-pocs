/* eslint-disable react/no-unescaped-entities */
import React from 'react'

export type CardProps = {
  props: any
}

const Card = ({props}:CardProps) => {
  return (
    <>
    
      <div className="card w-7/8 bg-base-100 shadow-xl">
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Project Name</h2>
          <p>Project summary</p>
          <div className="card-actions justify-end">
          <label  htmlFor="my-modal"className="btn btn-primary">More info</label>
          </div>
        </div>
      </div>
    {/* Modal code */}
    <input type="checkbox" id="my-modal" className="modal-toggle" />
    <div className="modal">
      <div className="modal-box w-11/12 max-w-5xl text-accent-content">
      <label htmlFor="my-modal" className="btn btn-sm btn-circle flex flex-end ml-auto sticky right-2 top-2">✕</label>
        <h3 className="font-bold text-lg sticky">Project Title</h3>
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
        <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
        <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
        <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
        <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
        <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
        <p className="py-4"> Last line You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
        <div className="modal-action sticky bg-base-100 bottom-[-24px] py-4">
          <label className="btn btn-primary">GitHub</label>
          <label className="btn btn-primary">Live Demo</label>
        </div>
      </div>
    </div>

    </>
  )
}

export default Card