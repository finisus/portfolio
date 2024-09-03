import Info from './Info.tsx';
import gridDotsSVG from './assets/grid[circular-dots][18x18].svg';
import skillsBannerImg from './assets/skills-banner-playtoy[compressed].png';

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