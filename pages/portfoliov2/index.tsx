/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Navbar from "../../components/portfoliov2/Navbar";

const index = () => {
  return (
    <>
      <Navbar />
      <div className=" from-primary to-secondary text-primary-content -mt-[4rem] grid place-items-center items-end bg-gradient-to-br pt-20 pb-24">
        <div className="hero-content col-start-1 row-start-1 w-full max-w-7xl flex-col justify-between gap-10 pb-40 lg:flex-row-reverse lg:items-end lg:gap-0 xl:gap-20">
          <div className="hero-content text-center lg:text-left flex-col lg:flex-row-reverse">

            <img
              src="https://placeimg.com/1000/1000/arch"
              className=" max-w-lg w-1/2 rounded-lg shadow-2xl"
              alt="Headshot"
            />
            <div>
              <h1 className="text-5xl font-bold">Hi! I'm <b className="text-accent">Brian Pham</b> :)</h1>
              <div className="py-6 text-xl">
              <p>
                I'm a Fourth Year Computer Science student at the University of Victoria
                with 1 year of experience in professional Full-Stack Web Development.

                </p>
                <p >
                I'm passionate about creating Functional and Scalable Web Applications with
                a beautiful User Interface.

                </p>
                <p>
                I've also done some freelance work for small businesses. You can find my works
                below!
              </p>
              </div>
              <button className="btn btn-accent mr-4">Get Resume</button>
              <button className="btn btn-secondary">Contact Me</button>
            </div>
          </div>
        </div>
      </div>
      <div className=" mx-auto mockup-window border h-screen bg-base-300 -mt-48 max-w-screen-xl">
        <div className="flex justify-center px-4 py-16 bg-base-200">Hello!</div>
      </div>
    </>
  );
};

export default index;
