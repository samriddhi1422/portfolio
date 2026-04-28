import React from 'react'
import '../Styles/Home.css'
import frame from '../assets/Frame (1).png'
import { useNavigate } from "react-router-dom";

import { BsArrowReturnRight } from "react-icons/bs";
function Home() {
  const navigate = useNavigate();
  return (
  <div className='home'>
    <div className='home1'>
  <div className='hello'>
    <span className='dot'></span>
    Hello World</div>
   <div className='int'>SAMRIDDHI <br/> SHRIVASTAVA</div>
   <div className='image'> <img src={frame}></img>  </div>
   </div>
   <div className='para'>
    <div className='show-para'>Hello! I’m Samriddhi, a passionate Full-Stack Developer and Content Creator <br></br> dedicated to crafting seamless digital experiences and writing about life on Medium.</div>
    <div className='block-para'>Hello! I’m Samriddhi, a passionate Full-Stack Developer and Content Creator dedicated to crafting seamless digital experiences and writing about life on Medium.</div>
    <div className='home-btn'>
<a 
  href="https://drive.google.com/file/d/1Fifyy2QktWPPPnOwl2t9rl-xbMAbC3-w/view?usp=sharing" 
  target="_blank" 
  rel="noreferrer"
>      <button><BsArrowReturnRight size={20}/> Download CV</button>
      </a>

<button onClick={() => navigate("/projects")}>
 <BsArrowReturnRight size={20}/> Go to Projects
</button>   </div>
    
   </div>
   </div>
  )
}

export default Home
