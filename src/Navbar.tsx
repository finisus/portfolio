import { useState, useEffect } from "react";
import { ActivePage } from "./App.tsx";

const homeIconSVG: JSX.Element = <svg width="20" height="20" viewBox="0 0 15 15" fill="efe9d3" xmlns="http://www.w3.org/2000/svg"><path d="M7.07926 0.222253C7.31275 -0.007434 7.6873 -0.007434 7.92079 0.222253L14.6708 6.86227C14.907 7.09465 14.9101 7.47453 14.6778 7.71076C14.4454 7.947 14.0655 7.95012 13.8293 7.71773L13 6.90201V12.5C13 12.7761 12.7762 13 12.5 13H2.50002C2.22388 13 2.00002 12.7761 2.00002 12.5V6.90201L1.17079 7.71773C0.934558 7.95012 0.554672 7.947 0.32229 7.71076C0.0899079 7.47453 0.0930283 7.09465 0.32926 6.86227L7.07926 0.222253ZM7.50002 1.49163L12 5.91831V12H10V8.49999C10 8.22385 9.77617 7.99999 9.50002 7.99999H6.50002C6.22388 7.99999 6.00002 8.22385 6.00002 8.49999V12H3.00002V5.91831L7.50002 1.49163ZM7.00002 12H9.00002V8.99999H7.00002V12Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>;
const questionMarkIconSVG: JSX.Element = <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.07505 4.10001C5.07505 2.91103 6.25727 1.92502 7.50005 1.92502C8.74283 1.92502 9.92505 2.91103 9.92505 4.10001C9.92505 5.19861 9.36782 5.71436 8.61854 6.37884L8.58757 6.4063C7.84481 7.06467 6.92505 7.87995 6.92505 9.5C6.92505 9.81757 7.18248 10.075 7.50005 10.075C7.81761 10.075 8.07505 9.81757 8.07505 9.5C8.07505 8.41517 8.62945 7.90623 9.38156 7.23925L9.40238 7.22079C10.1496 6.55829 11.075 5.73775 11.075 4.10001C11.075 2.12757 9.21869 0.775024 7.50005 0.775024C5.7814 0.775024 3.92505 2.12757 3.92505 4.10001C3.92505 4.41758 4.18249 4.67501 4.50005 4.67501C4.81761 4.67501 5.07505 4.41758 5.07505 4.10001ZM7.50005 13.3575C7.9833 13.3575 8.37505 12.9657 8.37505 12.4825C8.37505 11.9992 7.9833 11.6075 7.50005 11.6075C7.0168 11.6075 6.62505 11.9992 6.62505 12.4825C6.62505 12.9657 7.0168 13.3575 7.50005 13.3575Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>;
const codeIconSVG: JSX.Element = <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.96424 2.68571C10.0668 2.42931 9.94209 2.13833 9.6857 2.03577C9.4293 1.93322 9.13832 2.05792 9.03576 2.31432L5.03576 12.3143C4.9332 12.5707 5.05791 12.8617 5.3143 12.9642C5.5707 13.0668 5.86168 12.9421 5.96424 12.6857L9.96424 2.68571ZM3.85355 5.14646C4.04882 5.34172 4.04882 5.6583 3.85355 5.85356L2.20711 7.50001L3.85355 9.14646C4.04882 9.34172 4.04882 9.6583 3.85355 9.85356C3.65829 10.0488 3.34171 10.0488 3.14645 9.85356L1.14645 7.85356C0.951184 7.6583 0.951184 7.34172 1.14645 7.14646L3.14645 5.14646C3.34171 4.9512 3.65829 4.9512 3.85355 5.14646ZM11.1464 5.14646C11.3417 4.9512 11.6583 4.9512 11.8536 5.14646L13.8536 7.14646C14.0488 7.34172 14.0488 7.6583 13.8536 7.85356L11.8536 9.85356C11.6583 10.0488 11.3417 10.0488 11.1464 9.85356C10.9512 9.6583 10.9512 9.34172 11.1464 9.14646L12.7929 7.50001L11.1464 5.85356C10.9512 5.6583 10.9512 5.34172 11.1464 5.14646Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>;
const doubleArrowDownSVG: JSX.Element = <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.85355 2.14645C3.65829 1.95118 3.34171 1.95118 3.14645 2.14645C2.95118 2.34171 2.95118 2.65829 3.14645 2.85355L7.14645 6.85355C7.34171 7.04882 7.65829 7.04882 7.85355 6.85355L11.8536 2.85355C12.0488 2.65829 12.0488 2.34171 11.8536 2.14645C11.6583 1.95118 11.3417 1.95118 11.1464 2.14645L7.5 5.79289L3.85355 2.14645ZM3.85355 8.14645C3.65829 7.95118 3.34171 7.95118 3.14645 8.14645C2.95118 8.34171 2.95118 8.65829 3.14645 8.85355L7.14645 12.8536C7.34171 13.0488 7.65829 13.0488 7.85355 12.8536L11.8536 8.85355C12.0488 8.65829 12.0488 8.34171 11.8536 8.14645C11.6583 7.95118 11.3417 7.95118 11.1464 8.14645L7.5 11.7929L3.85355 8.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>;

type NavbarProps = {
  activePage: ActivePage,
  setActivePage: (newPage: ActivePage) => void
}

function Navbar({ activePage, setActivePage }: NavbarProps): JSX.Element {
  const [tooltip, setTooltip] = useState<string | null>(null);
  const [mobileView, setMobileView] = useState<boolean>(false);

  useEffect(() => {
    if (window.innerWidth < 720) {
      setMobileView(true);
    }
  }, []);

  const scrollToBottom = (): void => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  if (mobileView) {
    return (
      <div className="navbar">
        <div className="island">
          <button 
            className={activePage === "HomePage" ? "activePage" : ""}
            onClick={() => setActivePage("HomePage")}
          >
            {homeIconSVG}
            <span 
              className="desc"
              style={activePage === "HomePage" ? {color: '#f1bd3b'} : {color: '#efe9d3'}}
            >
              Home
            </span>
          </button>
          <button 
            className={activePage === "AboutPage" ? "activePage" : ""}
            onClick={() => setActivePage("AboutPage")}
          >
            {questionMarkIconSVG}
            <span 
              className="desc"
              style={activePage === "AboutPage" ? {color: '#f1bd3b'} : {color: '#efe9d3'}}
            >
              About
            </span>
          </button>
          <button 
            className={activePage === "WorksPage" ? "activePage" : ""}
            onClick={() => setActivePage("WorksPage")}
          >
            {codeIconSVG}
            <span 
              className="desc"
              style={activePage === "WorksPage" ? {color: '#f1bd3b'} : {color: '#efe9d3'}}
            >
              Works
            </span>
          </button>
        </div>
        <div className="scrolldown-mbl">
          <button onClick={scrollToBottom}>
              {doubleArrowDownSVG}
              <span className="desc">Scroll</span>
          </button>
        </div>
      </div> 
    );
  }

  return (
    <div className="navbar">
      <div className="island">
        <button 
          className={activePage === "HomePage" ? "activePage" : ""}
          onMouseEnter={() => setTooltip("Home")} 
          onMouseLeave={() => setTooltip(null)}
          onClick={() => setActivePage("HomePage")}
        >
          {homeIconSVG}
          {tooltip === "Home" && <span className="tooltip">Home</span>}
        </button>
        <button 
          className={activePage === "AboutPage" ? "activePage" : ""}
          onMouseEnter={() => setTooltip("About")} 
          onMouseLeave={() => setTooltip(null)}
          onClick={() => setActivePage("AboutPage")}
        >
          {questionMarkIconSVG}
          {tooltip === "About" && <span className="tooltip">About</span>}
        </button>
        <button 
          className={activePage === "WorksPage" ? "activePage" : ""}
          onMouseEnter={() => setTooltip("Works")} 
          onMouseLeave={() => setTooltip(null)}
          onClick={() => setActivePage("WorksPage")}
        >
          {codeIconSVG}
          {tooltip === "Works" && <span className="tooltip">Works</span>}
        </button>
      </div>
      <div className="scroll-down">
        <button
          onMouseEnter={() => setTooltip("Scroll Down")} 
          onMouseLeave={() => setTooltip(null)} 
          onClick={scrollToBottom}
        >
          {doubleArrowDownSVG}
          {tooltip === "Scroll Down" && <span className="tooltip">Scroll Down</span>}
        </button>
      </div>
    </div>
  );
}

export default Navbar;