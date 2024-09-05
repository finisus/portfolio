import { useState } from 'react';
import './ShowcaseWeb.css';
import loadingBarBgBorder from './assets/customLoadingBar/container-bg-border.png';
import loadingBar1 from './assets/customLoadingBar/pixel-loading-1.svg';
import loadingBar2 from './assets/customLoadingBar/pixel-loading-2.svg';
import loadingBar3 from './assets/customLoadingBar/pixel-loading-3.svg';
import loadingBar4 from './assets/customLoadingBar/pixel-loading-4.svg';
import loadingBar5 from './assets/customLoadingBar/pixel-loading-5.svg';
import loadingBar6 from './assets/customLoadingBar/pixel-loading-6.svg';
import loadingBar7 from './assets/customLoadingBar/pixel-loading-7.svg';
import loadingBar8 from './assets/customLoadingBar/pixel-loading-8.svg';
import loadingBar9 from './assets/customLoadingBar/pixel-loading-9.svg';
import loadingBar10 from './assets/customLoadingBar/pixel-loading-10.svg';

type ShowcaseType = {
  meter: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
  name: string,
  preview: JSX.Element,
  link: string
}

function ShowcaseWeb({ meter, name, preview, link }: ShowcaseType): JSX.Element {
  const [linkPopup, setLinkPopup] = useState<string | null>(null);

  const loadingBarImg: { [key: number]: string } = {
    1: loadingBar1,
    2: loadingBar2,
    3: loadingBar3,
    4: loadingBar4,
    5: loadingBar5,
    6: loadingBar6,
    7: loadingBar7,
    8: loadingBar8,
    9: loadingBar9,
    10: loadingBar10
  };

  return (
    <div 
      className="showcase"
      onMouseEnter={() => setLinkPopup(link)} 
      onMouseLeave={() => setLinkPopup(null)} 
    >
      <div className='loadingBar'>
        <img className='bg-curved-border' src={loadingBarBgBorder} />
        <span className='quirkyText'>Quirky</span>
        <img src={loadingBarImg[meter]} /> 
        <span className='normalText'>Exquisite</span>
      </div>
      
      <div 
        className="preview"
        onClick={() => { window.open(`${link}`, "_blank") }}  
      >
        {preview}
        {linkPopup === `${link}` && <span className="linkPopup">{link}</span>}
      </div>
      <h3>
        {name}
      </h3>
    </div>
  );
}

export default ShowcaseWeb;