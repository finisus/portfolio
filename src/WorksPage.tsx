import { useEffect } from 'react';
import Info from './Info.tsx';
import ShowcaseWeb from './ShowcaseWeb.tsx';
import Marquee from "react-fast-marquee";
import useImagePreloader from './hooks/useImagePreloader.tsx';

import gridSmallSVG from './assets/grid[pattern-plus][18x18].svg';
import htmlIconSVG from './assets/tech-stack-icons/html-5-svgrepo-com.svg';
import cssIconSVG from './assets/tech-stack-icons/css-3-svgrepo-com.svg';
import jsIconSVG from './assets/tech-stack-icons/js-svgrepo-com.svg';
import reactIconSVG from './assets/tech-stack-icons/react-svgrepo-com.svg';
import tsIconSVG from './assets/tech-stack-icons/typescript-icon-svgrepo-com.svg';
import ethIconSVG from './assets/tech-stack-icons/ethereum-crypto-cryptocurrency-2-svgrepo-com.svg';

import ceicatPreview from './assets/workPreviews/ceicat-preview[640x359].png';
import ceicatPfpGenPreview from './assets/workPreviews/ceicat-pfpgen-preview[640x359].png';
import billyPreview from './assets/workPreviews/billy-preview[640x359].png';
import y2kPreview from './assets/workPreviews/y2k-preview[640x359].png';
import chomikPreview from './assets/workPreviews/chomik-preview[640x359].png';
import wechoosewealthPreview from './assets/workPreviews/we-choose-wealth-preview[640x359].png';

const preloadSrcList: string[] = [gridSmallSVG, htmlIconSVG, cssIconSVG, jsIconSVG, reactIconSVG, tsIconSVG, ethIconSVG, ceicatPreview, ceicatPfpGenPreview, billyPreview, y2kPreview];

function WorksPage(): JSX.Element {
  const { imagesPreloaded } = useImagePreloader(preloadSrcList);

  useEffect(() => {
    if (imagesPreloaded) {
      /* add gsap animations here */
      /* make the "here lies... " paragraph animate with each text appearing one by one */
    }
  }, [imagesPreloaded]);

  if (!imagesPreloaded) {
    return (
      <div className='work-loading'>
        <p>Loading...</p>
      </div>
    );
  }

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
        <p>
          Here lies a collection of few of my works,
          organised in the best way I could some of my...
          let's just say... quirky builds.
        </p>
        <Marquee 
          className='marquee'
          play={true}
          autoFill={true}
          pauseOnClick={false}
          pauseOnHover={false}
          direction='left'
          speed={50}
          delay={0}
          loop={0}
          gradient={true}
          gradientColor='rgb(18, 18, 18)'
          gradientWidth={80}
        >
          <div>
            <img src={htmlIconSVG} style={{ width: '20px', height: '20px'}} />
            <span>HTML5</span>
          </div>
          <div /><div />
          <div>
            <img src={cssIconSVG} style={{ width: '20px', height: '20px'}} />
            <span>CSS3</span>
          </div>
          <div /><div />
          <div>
            <img src={jsIconSVG} style={{ width: '20px', height: '20px'}} />
            <span>Javascript</span>
          </div>
          <div /><div />
          <div>
            <img src={reactIconSVG} style={{ width: '20px', height: '20px'}} />
            <span>React</span>
          </div>
          <div /><div /> 
          <div>
            <img src={tsIconSVG} style={{ width: '18px', height: '18px'}} />
            <span>Typescript</span>
          </div>
          <div /><div />
          <div>
            <img src={ethIconSVG} style={{ width: '22px', height: '22px'}} />
            <span>Web3.js</span>
          </div>
          <div /><div />
        </Marquee>
        <div className='showcase-container'>

          <ShowcaseWeb 
            meter={90}
            preview={<img src={ceicatPreview} />} 
            name={"$CEICAT - Ceiling Cat"}
            link={"https://finisus-ceicat.vercel.app/"}
          />

          <ShowcaseWeb 
            meter={50} 
            preview={<img src={ceicatPfpGenPreview} />}
            name={"Ceiling Cat's PFP Gen"}
            link={"https://finisus-ceicat-pfpgen.vercel.app/"}
          />

          <ShowcaseWeb
            meter={50}
            preview={<img src={billyPreview} />}
            name={"$BILLY - My rendition"}
            link={"https://finisus-billy.vercel.app/"}
          />

          <ShowcaseWeb
            meter={50}
            preview={<img src={y2kPreview} />}
            name={"Y2K"}
            link={"https://finisus-y2k.vercel.app/"}
          />

          <ShowcaseWeb
            meter={50}
            preview={<img src={chomikPreview} />}
            name={"Chomik"}
            link={"https://finisus-chomik.vercel.app/"}
          /> 

          <ShowcaseWeb
            meter={50}
            preview={<img src={wechoosewealthPreview} />}
            name={"Chomik"}
            link={"https://finisus-wechosewealth.vercel.app/"}
          /> 

        </div>
      </div>
      <Info />
    </div>
  );
}

export default WorksPage;