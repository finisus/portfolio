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
import tailwindSVG from './assets/tech-stack-icons/tailwindcss-mark.svg';
import ethIconSVG from './assets/tech-stack-icons/ethereum-crypto-cryptocurrency-2-svgrepo-com.svg';

import ceicatPreview from './assets/workPreviews/ceicat-preview[640x359].png';
import ceicatPfpGenPreview from './assets/workPreviews/ceicat-pfpgen-preview[640x359].png';
import billyPreview from './assets/workPreviews/billy-preview[640x359].png';
import y2kPreview from './assets/workPreviews/y2k-preview[640x359].png';
import chomikPreview from './assets/workPreviews/chomik-preview[640x359].png';
import wechoosewealthPreview from './assets/workPreviews/we-choose-wealth-preview[640x359].png';
import pizzagatePreview from './assets/workPreviews/pizzagate-preview[640x359].png';
import solanacartelPreview from './assets/workPreviews/solana-cartel-preview[640x359].png';
import failanaPreview from './assets/workPreviews/failana-preview[640x359].png';
import lethimcookPreview from './assets/workPreviews/lethimcook-preview[640x359].png';
import skbdiPreview from './assets/workPreviews/skbdi-preview[640x359].png';
import catwifgoldPreview from './assets/workPreviews/catwifgold-preview[640x359].png';
import torocatPreview from './assets/workPreviews/torocat-preview[640x359].png';
import lickcatPreview from './assets/workPreviews/lickcat-preview[640x359].png';
import roaringpixelkittyPreview from './assets/workPreviews/roaring-pixel-kitty-preview[640x359].png';
import lvdogPreview from './assets/workPreviews/lvdog-preview[640x359].png';
import mochadogPreview from './assets/workPreviews/mocha-dog-preview[640x359].png';
import reetardsPreview from './assets/workPreviews/reetards-preview[640x359].png';
import ricardomemePreview from './assets/workPreviews/ricardo-meme-preview[640x359].png';
import nyanpopPreview from './assets/workPreviews/nyanpop-preview[640x359].png';
import shirocatPreview from './assets/workPreviews/shiro-cat-preview[640x359].png';

const preloadSrcList: string[] = [gridSmallSVG, htmlIconSVG, cssIconSVG, jsIconSVG, reactIconSVG, tsIconSVG, tailwindSVG, 
  ethIconSVG, ceicatPreview, ceicatPfpGenPreview, billyPreview, y2kPreview, pizzagatePreview, solanacartelPreview, failanaPreview, 
  lethimcookPreview, skbdiPreview, catwifgoldPreview, torocatPreview, lickcatPreview, roaringpixelkittyPreview, lvdogPreview,
  mochadogPreview, reetardsPreview, ricardomemePreview, nyanpopPreview, shirocatPreview ];

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
        <span style={{ fontSize: '1.0em '}}>
          <span style={{ color: '#f2d5cf' }}>:</span>
          <span style={{ color: '#f4b8e4' }}>:</span> 
          <span> </span>
          <span style={{ color: '#e78284' }}>w</span>
          <span style={{ color: '#ef9f76' }}>o</span>
          <span style={{ color: '#e5c890' }}>r</span>
          <span style={{ color: '#a6d189' }}>k</span>
          <span style={{ color: '#99d1db' }}>s</span>
          <span> </span>
          <span style={{ color: '#8caaee' }}>:</span>
          <span style={{ color: '#ca9ee6' }}>:</span>
        </span>
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
            <img src={htmlIconSVG} style={{ width: '20px', height: '20px' }} />
            <span>HTML5</span>
          </div>
          <div /><div />
          <div>
            <img src={cssIconSVG} style={{ width: '20px', height: '20px' }} />
            <span>CSS3</span>
          </div>
          <div /><div />
          <div>
            <img src={jsIconSVG} style={{ width: '20px', height: '20px' }} />
            <span>Javascript</span>
          </div>
          <div /><div />
          <div>
            <img src={reactIconSVG} style={{ width: '20px', height: '20px' }} />
            <span>React</span>
          </div>
          <div /><div /> 
          <div>
            <img src={tsIconSVG} style={{ width: '18px', height: '18px' }} />
            <span>Typescript</span>
          </div>
          <div>
            <img src={tailwindSVG} style={{ width: '22px', height: '22px' }} />
            <span>Tailwind CSS</span>
          </div>
          <div /><div />
          <div>
            <img src={ethIconSVG} style={{ width: '22px', height: '22px' }} />
            <span>Web3.js</span>
          </div>
          <div /><div />
        </Marquee>
        <div className='showcase-container'>

          <ShowcaseWeb 
            meter={10}
            preview={<img src={ceicatPreview} />} 
            name={"$CEICAT - Ceiling Cat"}
            link={"https://finisus-ceicat.vercel.app/"}
          />

          <ShowcaseWeb 
            meter={10} 
            preview={<img src={ceicatPfpGenPreview} />}
            name={"Ceiling Cat's PFP Gen"}
            link={"https://finisus-ceicat-pfpgen.vercel.app/"}
          />

          <ShowcaseWeb
            meter={4}
            preview={<img src={billyPreview} />}
            name={"$BILLY - My rendition"}
            link={"https://finisus-billy.vercel.app/"}
          />

          <ShowcaseWeb
            meter={8}
            preview={<img src={y2kPreview} />}
            name={"Y2K"}
            link={"https://finisus-y2k.vercel.app/"}
          />

          <ShowcaseWeb
            meter={1}
            preview={<img src={chomikPreview} />}
            name={"Chomik"}
            link={"https://finisus-chomik.vercel.app/"}
          /> 

          <ShowcaseWeb
            meter={7}
            preview={<img src={wechoosewealthPreview} />}
            name={"$WEALTH - We Choose Wealth"}
            link={"https://finisus-wechosewealth.vercel.app/"}
          /> 

          <ShowcaseWeb
            meter={4}
            preview={<img src={pizzagatePreview} />}
            name={"$PIZZAGATE"}
            link={"https://finisus-pizzagate.vercel.app/"}
          /> 

          <ShowcaseWeb
            meter={5}
            preview={<img src={solanacartelPreview} />}
            name={"$CARTEL - Solana Cartel"}
            link={"https://finisus-solanacartel.vercel.app/"}
          /> 

          <ShowcaseWeb
            meter={8}
            preview={<img src={failanaPreview} />}
            name={"$FAILANA"}
            link={"https://finisus-failana.vercel.app/"}
          /> 

          <ShowcaseWeb
            meter={3}
            preview={<img src={lethimcookPreview} />}
            name={"$COOK - Let him cook"}
            link={"https://finisus-lethimcook.vercel.app/"}
          /> 

          <ShowcaseWeb
            meter={1}
            preview={<img src={skbdiPreview} />}
            name={"$SKBDI"}
            link={"https://finisus-skbdi.vercel.app/"}
          /> 

          <ShowcaseWeb
            meter={10}
            preview={<img src={catwifgoldPreview} />}
            name={"Cat wif gold"}
            link={"https://finisus-catwifgold.vercel.app/"}
          /> 

          <ShowcaseWeb
            meter={8}
            preview={<img src={torocatPreview} />}
            name={"$TORO - Toro Inoue"}
            link={"https://finisus-toroinoue.vercel.app/"}
          /> 

          <ShowcaseWeb
            meter={6}
            preview={<img src={lickcatPreview} />}
            name={"$LICK - Lick Cat"}
            link={"https://finisus-lickcat.vercel.app/"}
          /> 

          <ShowcaseWeb
            meter={7}
            preview={<img src={roaringpixelkittyPreview} />}
            name={"$RPK - Roaring Pixel Kitty"}
            link={"https://finisus-roaringpixelkitty.vercel.app/"}
          /> 

          <ShowcaseWeb
            meter={6}
            preview={<img src={lvdogPreview} />}
            name={"louis Vuitton Dog"}
            link={"https://finisus-lvdog.vercel.app/"}
          /> 

          <ShowcaseWeb
            meter={5}
            preview={<img src={mochadogPreview} />}
            name={"Mocha Dog"}
            link={"https://finisus-mochadog.vercel.app/"}
          /> 

          <ShowcaseWeb
            meter={1}
            preview={<img src={reetardsPreview} />}
            name={"Reetards"}
            link={"https://finisus-reetards.vercel.app/"}
          /> 

          <ShowcaseWeb
            meter={1}
            preview={<img src={ricardomemePreview} />}
            name={"$RICARDO"}
            link={"https://finisus-ricardo.vercel.app/"}
          /> 

          <ShowcaseWeb
            meter={7}
            preview={<img src={nyanpopPreview} />}
            name={"Nyan Pop Cat"}
            link={"https://finisus-nyanpop.vercel.app/"}
          /> 

          <ShowcaseWeb
            meter={7}
            preview={<img src={shirocatPreview} />}
            name={"Shiro Cat"}
            link={"https://finisus-shirocat.vercel.app/"}
          /> 
        </div>
      </div>
      <Info />
    </div>
  );
}

export default WorksPage;