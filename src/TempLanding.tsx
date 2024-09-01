import { useEffect } from 'react';
import noiseSVG from './assets/nnnoise.svg';

function TempLanding() {
  useEffect(() => {
    const githubBtn = document.getElementById('githubBtn') as HTMLButtonElement | null;
    const openGithub = () => window.open("https://github.com/finisus", "_blank");
    if (githubBtn) {
      githubBtn.addEventListener('click', openGithub);
    }

    const contactBtn = document.getElementById('contactBtn') as HTMLButtonElement | null;
    const openContact = () => window.open("mailto:finisus@protonmail.com", "_self")
    if (contactBtn) {
      contactBtn.addEventListener('click', openContact);
    }
    
    return () => {
      if (githubBtn) {
        githubBtn.removeEventListener('click', openGithub);
      }

      if (contactBtn) {
        contactBtn.removeEventListener('click', openContact);
      }
    };
  }, []);

  return (
    <div id='tempLanding'>

      <img id='bgNoiseSvg' src={noiseSVG} />

      <svg id='starSvg' viewBox="0 0 1010 1217" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M692.68 732.08C704.21 726.99 715.93 723.6 728.27 721.86C746.91 719.19 765.42 715.26 783.96 711.79C796.78 709.37 809.53 706.25 822.4 704.39C858.28 699.15 894.6 698.48 930.21 690.48C935.82 689.22 941.74 689.67 947.53 689.61C963.44 689.44 979.34 689.44 995.27 689.27C997.42 689.25 999.6 688.88 1001.67 688.25C1007.91 686.32 1011.28 676.85 1008.07 670.44C1005.04 664.36 1000.23 661.68 994.18 660.14C941.25 646.61 888.74 631.35 837.52 611C778.21 587.43 718.44 565.15 662.68 531.78C635.47 515.5 610.87 495.19 594.42 465.82C577.89 436.31 565.17 404.37 556.83 370.54C553.16 355.7 549.93 340.73 545.67 326.11C532.19 279.87 520.19 233.31 513.92 184.99C510.89 161.81 504.59 139.19 501.28 116.04C497.04 86.52 494.38 56.6901 490.84 27.0301C490.08 20.6501 489.06 14.1201 486.93 8.21005C485.78 4.99005 481.94 0.780051 479.46 0.890051C475.71 1.07005 470.93 3.68005 468.71 7.02005C465.85 11.35 464.09 17.2901 463.55 22.7501C461.16 46.8001 456.63 70.5001 453.73 94.3301C447 149.7 440.31 205.02 430.23 259.79C427.17 276.42 424.74 293.24 421.25 309.76C411.04 357.9 399.82 405.7 377 448.83C368.87 464.19 360.32 478.97 348.65 491.56C338.66 502.32 328.37 512.09 316.36 519.99C300.78 530.24 286.53 543.25 270.4 552.2C239.95 569.08 208.73 584.27 177.54 599.48C159.68 608.19 141.39 615.95 123.03 623.33C113.54 627.14 103.38 628.83 93.6801 632.07C67.3401 640.87 41.0801 649.94 14.8301 658.97C12.0901 659.93 9.32008 661.07 6.84008 662.61C1.89008 665.68 -0.0299771 670.57 0.660023 676.89C1.25002 682.26 3.79002 686.27 8.16002 687.72C13.66 689.53 19.41 690.64 25.11 691.24C83.53 697.53 141.44 707.13 198.15 724.32C216.3 729.82 234.66 735.28 251.86 743.47C275.11 754.55 297.62 767.66 319.91 781.02C340.56 793.37 356.97 811.22 370.91 832.51C394.08 867.94 402.33 910.47 417.35 949.76C417.63 950.5 417.62 951.35 417.79 952.14C422.45 974.18 426.86 996.3 431.89 1018.25C440 1053.63 444.91 1089.53 448.12 1125.9C450.39 1151.61 454.96 1177.07 458.63 1202.64C459.42 1208.25 460.46 1213.97 467.91 1216.54C475.2 1211.4 477.91 1203.99 479.08 1195.83C480.34 1187.05 482.12 1178.11 481.81 1169.33C480.88 1143.11 485.87 1117.62 489.92 1092.29C496.79 1049.31 504.87 1006.51 516.56 964.66C528.02 923.62 540.32 883.04 557.96 844.74C561.59 836.83 565.34 828.88 569.93 821.68C592.34 786.48 621.08 760.32 657.93 746.02C669.55 741.52 681.24 737.11 692.68 732.07V732.08Z" fill="#3C5B6F"/>
      </svg>

      <header>
        <span className='header'>FINISUS</span>
        <div className='socials'>
          <button id='githubBtn'>Github</button>
          <button id='contactBtn'>Contact Us</button>
        </div>
      </header>

      <main>
        <h1 className='header'>Finis Visus.</h1>
        <h2>Finisus' vision for you.</h2>
        <p>Our page is under construction, doesn't mean we won't listen to you. Feel free to contact us.</p>
      </main>
    </div>
  );
}

export default TempLanding;