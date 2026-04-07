import React from 'react'
import '../Styles/Services.css'
import { BsArrowReturnRight } from "react-icons/bs";
import { SiBlackmagicdesign } from "react-icons/si";
import { FaConnectdevelop } from "react-icons/fa6";
import { TbWriting } from "react-icons/tb";
import { NavLink } from 'react-router-dom';

function Service() {
  return (
    <div className='service'>
      <div className='txt-serv'>
        <div className='hello'>
          <span className='dot'></span>
          What I Offer
        </div>
        <div className='serv-txt'>SERVICES</div>
      </div>

      <div className="container">

        {/* UI / PRODUCT DESIGN */}
        <div className="card web-design">
          <div className="icon"><SiBlackmagicdesign size={35}/></div>
          <h2>Product & UI Design</h2>
          <p>
            I design clean, intuitive, and conversion-focused interfaces for modern web apps and SaaS products.
            Every design is built with users, scalability, and real-world usage in mind.
          </p>
          <div className="features">
            <div>Modern UI/UX for SaaS & Web Apps</div>
            <div>Responsive & Mobile-First Design</div>
            <div>Wireframing & Rapid Prototyping</div>
          </div>
          <NavLink to="/projects">
            <button className="button">
              <BsArrowReturnRight size={20}/> View Projects
            </button>
          </NavLink>
        </div>

        {/* FULL STACK / SAAS DEVELOPMENT */}
        <div className="card development">
          <div className="icon"><FaConnectdevelop size={35}/></div>
          <h2>Full Stack & SaaS Development</h2>
          <p>
            I build end-to-end web applications — from idea to deployment. 
            Specializing in MERN stack and AI-powered tools, I create scalable, production-ready SaaS products.
          </p>
          <div className="features">
            <div>MERN Stack (React, Node, MongoDB)</div>
            <div>REST APIs & Authentication Systems</div>
            <div>AI Integrations & Smart Features</div>
          </div>
          <NavLink to="/projects">
            <button className="button">
              <BsArrowReturnRight size={20}/> View Projects
            </button>
          </NavLink>
        </div>

        {/* CONTENT / TECH WRITING */}
        <div className="card brand-identity">
          <div className="icon"><TbWriting size={35}/></div>
          <h2>Content & Technical Writing</h2>
          <p>
            I write impactful content on technology, personal growth, and real-world experiences — blending storytelling with clarity to engage and inform.
          </p>
          <div className="features">
            <div>Tech Blogs & Developer Content</div>
            <div>Personal Growth & Storytelling</div>
            <div>SEO-Friendly Writing</div>
          </div>
          <a href='https://medium.com/@samriddhi1422' target='_blank' rel="noreferrer">
            <button className="button">
              <BsArrowReturnRight size={20}/> Read Blogs
            </button>
          </a>
        </div>

      </div>
    </div>
  )
}

export default Service;