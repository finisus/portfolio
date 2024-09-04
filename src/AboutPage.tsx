import { useEffect } from 'react';
import gsap from 'gsap';
import Info from './Info.tsx';
import useImagePreloader from './hooks/useImagePreloader.tsx';

import gridDotsSVG from './assets/grid[circular-dots][18x18].svg';
import skillsBannerImg from './assets/skills-banner-reco.png';
const preloadSrcList: string[] = [gridDotsSVG, skillsBannerImg];

function AboutPage(): JSX.Element {
  useEffect(() => {
    gsap.fromTo('.ap .content .header h1',
      {
        y: 32,
        opacity: 0.1
      },
      {
        duration: 1.5,
        ease: 'power3.inOut',
        y: 0,
        opacity: 1.0
      }
    );
  }, []);

  const { imagesPreloaded } = useImagePreloader(preloadSrcList);

  if (!imagesPreloaded) {
    return (
      <p>Loading...</p>
    );
  }

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
        <span>:: about ::</span>
        <div className='header'>
          <div className='lamp'></div>
          <div className='lamplight'></div>
          <h1>I design and build beautiful things on the interwebs.</h1> 
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