import navIcon from './assets/bunny-playboy_x_butcherbilly-march1957[400x400][compressed].png';

function Navbar(): JSX.Element {
  return (
    <div className="navbar">
      <div className="icon">
        <img src={navIcon} alt="Finisus" />
      </div>
      <div className="links">
        <button>Github</button>
      </div>
    </div>
  );
}

export default Navbar;