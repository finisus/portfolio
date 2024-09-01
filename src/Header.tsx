import finisusHeaderImg from './assets/header-playtoy[1080x215][halftone].png';

function Header(): JSX.Element {
  return (
    <div className="header">
      <img className='titleImg' src={finisusHeaderImg} />
    </div>
  );
}

export default Header;