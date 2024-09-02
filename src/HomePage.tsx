import titleHeaderImg from './assets/header-playtoy[1080x215][halftone].png';

function HomePage(): JSX.Element {

  return (
    <div className="hp">

      <div className="header">
        <img className='titleImg' src={titleHeaderImg} />
      </div>

      <div className='info'>
        <div className='contact'>
          <h3>Get in touch</h3>
        </div>

        <div className='navbar-spacer'>

        </div>
      </div>

    </div>
  );
}

export default HomePage;