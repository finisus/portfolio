import Info from './Info.tsx';
import gridDotsSVG from './assets/grid[circular-dots][18x18].svg';

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
        <h1>I design</h1>
      </div>
      <Info />
    </div>
  );
}

export default AboutPage;