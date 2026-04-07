import React from 'react'
import '../Styles/About.css'
import { BsArrowReturnRight } from "react-icons/bs";
import frame from '../assets/Frame.png'
import { aboutUspage } from '../text';
import { NavLink } from 'react-router-dom';

function About() {


    const skills = [
  "React.js",
  "JavaScript (ES6+)",
  "Node.js",
  "Express.js",
  "MongoDB",
  "HTML5",
  "CSS3",
  "React Native",
  "Java",
  "Data Structures & Algorithms (DSA)",
  "AI & API Integrations",
  "Git",
  "GitHub",
  "Figma",
  "Canva"
];
  return (
    <div className='about'>
      <div className='abt'>
      <div className='abt1'>
     <div className='abt-txt'>ABOUT</div>
     <div className='intro'>
        <p>{aboutUspage.intro}</p>
        
<p>{aboutUspage.intro2}</p>
     <div className='abt-btn'><a 
  href="https://drive.google.com/file/d/1Fifyy2QktWPPPnOwl2t9rl-xbMAbC3-w/view?usp=sharing" 
  target="_blank" 
  rel="noreferrer"
>  
      <button><BsArrowReturnRight size={20}/> Download CV</button>
      </a></div>
     </div>
     </div>
     <div className='abt-2'>
      <img src={frame}></img>
     </div>
     </div>
     <div className='skills'>
      <div className='skl-txt'>Skills</div>

       <div className='skill-container'>
        
         {skills.map((skill, index) => (
                <div className='skl' key={index}>
                    <span className='dot'></span> {skill}
                </div>
            ))}
        </div>
      
           </div>
    <div className='exp'>

  <div className='exp-txt'>
    MY WORK EXPERIENCE
  </div>

  <div className='exp-container '>

    {/* Current Experience */}
    <div className='exp-detail'>
      <h4>Software Development Engineer Intern — Full Stack — EasyWash, India | Jan 2026 – April 2026</h4>
      <ul>
        <li>Designed and developed scalable full-stack features using the MERN stack (MongoDB, Express.js, React.js, Node.js) for a production-grade application.</li>
        <li>Collaborated with stakeholders to understand user requirements and translated them into reliable, maintainable solutions following clean code principles.</li>
        <li>Built and integrated RESTful APIs with frontend components, improving performance and response efficiency.</li>
        <li>Implemented secure authentication, role-based access control (RBAC), and robust CRUD operations.</li>
        <li>Actively incorporated feedback from code reviews and adopted new tools to enhance development quality.</li>
        <li>Worked cross-functionally with design, product, and engineering teams to deliver production-ready features on time.</li>
      </ul>
    </div>

    {/* Previous Experience */}
    <div className='exp-detail'>
      <h4>Frontend Developer Intern — Docxito | Feb 2025 – Apr 2025</h4>
      <ul>
        <li>Developed and maintained responsive web pages using React.js and styled-components.</li>
        <li>Worked on cross-platform mobile features using React Native.</li>
        <li>Collaborated closely with designers to implement pixel-perfect UI.</li>
      </ul>
    </div>

    <div className='exp-btn'>
      <button>
        <BsArrowReturnRight size={20}/>  
        <NavLink to="/projects">Explore My Projects</NavLink>
      </button>
    </div>

  </div>
</div>
    </div>
    
  )
}

export default About