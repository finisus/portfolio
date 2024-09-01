import heartEmoji from './assets/yellow-heart-emoji.png';

function Footer(): JSX.Element {
  return (
    <div className="footer">

      <div className="info">
        <span>Made with love by Finisus <img className='smallEmoji' src={heartEmoji} /></span>
        <button id="mail">finisus@protonmail.com</button>
      </div>
    </div>
  );
}

export default Footer;