import Info from './Info.tsx';
import gridSmallSVG from './assets/grid[pattern-plus][18x18].svg';

function WorksPage(): JSX.Element {
  return(
    <div className="wp">
      <div className="gridBackground">
        <div className='columns'>
          <div className='rows'>
            <img src={gridSmallSVG} />
            <img src={gridSmallSVG} />
            <img src={gridSmallSVG} />
            <img src={gridSmallSVG} />
          </div>
          <div className='rows'>
            <img src={gridSmallSVG} />
            <img src={gridSmallSVG} />
            <img src={gridSmallSVG} />
            <img src={gridSmallSVG} />
          </div>
          <div className='rows'>
            <img src={gridSmallSVG} />
            <img src={gridSmallSVG} />
            <img src={gridSmallSVG} />
            <img src={gridSmallSVG} />
          </div>
        </div>
      </div>
      <div className='content'>
        <span>:: works ::</span>
      </div>
      <Info />
    </div>
  );
}

export default WorksPage;