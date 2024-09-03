"use client";
import Info from './Info.tsx';
import gridDotsSVG from './assets/grid[circular-dots][18x18].svg';
import skillsBannerImg from './assets/skills-banner-playtoy[compressed].png';
import { motion } from "framer-motion";
import { LampContainer } from './Lamp.tsx';

function AboutPage(): JSX.Element {
  return(
    <div className="ap">
      <div className="gridBackground">
        <div className='columns'>
          <div className='rows'>
            <img src={gridDotsSVG} />
            <img src={gridDotsSVG} />
            <img src={gridDotsSVG} />
            <img src={gridDotsSVG} />
          </div>
          <div className='rows'>
            <img src={gridDotsSVG} />
            <img src={gridDotsSVG} />
            <img src={gridDotsSVG} />
            <img src={gridDotsSVG} />
          </div>
          <div className='rows'>
            <img src={gridDotsSVG} />
            <img src={gridDotsSVG} />
            <img src={gridDotsSVG} />
            <img src={gridDotsSVG} />
          </div>
        </div>
      </div>
      <div className='content'>
        <span>:: About ::</span>
        <div className='header'>
          <LampContainer className='lamp'>
            <motion.h1
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            >
              I design and build beautiful things on the interwebs.
            </motion.h1>
          </LampContainer> 
        </div>
        <div className='skills'>
          <img src={skillsBannerImg} />
        </div>
      </div>
      <Info />
    </div>
  );
}

export default AboutPage;