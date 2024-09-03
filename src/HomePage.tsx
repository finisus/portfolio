import { useEffect } from 'react';
import Info from './Info.tsx';
import titleHeaderImg from './assets/header-playtoy[1080x215][halftone].png';
import bunnyPlayboyImg from './assets/bunny-playboy[1080x1177][transparentbg][gradient].png'

const blobBlurBg: JSX.Element = <svg width="1220" height="1161" viewBox="0 0 1220 1161" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_f_1_3)">
    <circle cx="610" cy="610" r="410" fill="url(#paint0_linear_1_3)"/>
  </g>
  <g filter="url(#filter1_f_1_3)">
    <circle cx="751" cy="451" r="300" fill="url(#paint1_linear_1_3)"/>
  </g>
  <defs>
    <filter id="filter0_f_1_3" x="0" y="0" width="1220" height="1220" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1_3"/>
    </filter>
    <filter id="filter1_f_1_3" x="351" y="51" width="800" height="800" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_1_3"/>
    </filter>
    <linearGradient id="paint0_linear_1_3" x1="610" y1="200" x2="610" y2="1020" gradientUnits="userSpaceOnUse">
      <stop stopColor="#F36B17"/>
      <stop offset="1" stopColor="#F1BD3B" stopOpacity="0.46"/>
    </linearGradient>
    <linearGradient id="paint1_linear_1_3" x1="751" y1="151" x2="751" y2="751" gradientUnits="userSpaceOnUse">
      <stop stopColor="#C73230"/>
      <stop offset="1" stopColor="#F1BD3B" stopOpacity="0"/>
      <stop offset="1" stopColor="#D2C13B"/>
    </linearGradient>
  </defs>
</svg>;

/*
* Maybe animated the smoke from cigar
*/

function HomePage(): JSX.Element {

  useEffect(() => {
    const handleBlurBunnyOnScroll = () => {
      const maxBlur = 8; // Maximum blur in pixels
      const scrollRange = document.body.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const blurAmount = (scrollPosition / scrollRange) * maxBlur;

      const bunnyImg = document.querySelector('.hp .header .bunnyImg') as HTMLElement;
      if (bunnyImg) {
        bunnyImg.style.filter = `blur(${Math.min(blurAmount, maxBlur)}px)`;
        bunnyImg.style.webkitFilter = `blur(${Math.min(blurAmount, maxBlur)}px)`;
      }
    }
    window.addEventListener('scroll', handleBlurBunnyOnScroll);

    return () => {
      window.removeEventListener('scroll', handleBlurBunnyOnScroll);
    };
  }, []);

  return (
    <div className="hp">
      <div className='blob-blur-bg'>
        {blobBlurBg}
      </div>
      <div className="header">
        <img className='titleImg' src={titleHeaderImg} />
        <img className='bunnyImg' src={bunnyPlayboyImg} />
      </div>
      <Info />
    </div>
  );
}

export default HomePage;