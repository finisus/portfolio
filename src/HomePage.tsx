import { useEffect } from 'react';
import Info from './Info.tsx';
import titleHeaderImg from './assets/header-playtoy[1080x215][halftone].png';
import bunnyPlayboyImg from './assets/bunny-playboy[1080x1177][transparentbg][gradient].png'

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
      <div className="header">
        <img className='titleImg' src={titleHeaderImg} />
        <img className='bunnyImg' src={bunnyPlayboyImg} />
      </div>
      <Info />
    </div>
  );
}

export default HomePage;