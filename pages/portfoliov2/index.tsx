/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Navbar from "../../components/portfoliov2/Navbar";
import { FaReact } from "react-icons/fa";
import {BsInstagram,BsLinkedin,BsGithub} from "react-icons/bs"
import { SiTypescript, SiMongodb, SiExpress } from "react-icons/si";
import Card from "../../components/portfoliov2/Card";
import Footer from "../../components/portfoliov2/Footer";
import Hero from "../../components/portfoliov2/Hero";
import Experiences from "../../components/portfoliov2/Experiences";
import Projects from "../../components/portfoliov2/Projects";
import About from "../../components/portfoliov2/About";
import Contact from "../../components/portfoliov2/Contact";

const index = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <Experiences/>
      {/* Project Gallery */}
      <Projects/>
      {/* About me */}
      <About/>
      {/* Contact me Section */}
      <Contact/>
      {/* Footer Section */}
      <Footer/>
    </>
  );
};

export default index;
