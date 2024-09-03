import { useState, useEffect } from "react";
import TempLanding from "./TempLanding.tsx";
import StaticNoise from "./StaticNoise.tsx";
import Navbar from "./Navbar.tsx";
import HomePage from "./HomePage.tsx";
import AboutPage from "./AboutPage.tsx";
import WorksPage from "./WorksPage.tsx";

export type ActivePage = "HomePage" | "AboutPage" | "WorksPage";

function App(): JSX.Element {
  const [isLaunched, setIsLaunched] = useState<boolean>(false);
  const [activePage, setActivePage] = useState<ActivePage>("HomePage");

  useEffect(() => {
    setIsLaunched(true);
    setActivePage("HomePage");
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 30); // add delay: 0.3s

    return () => clearTimeout(timer);
  }, [activePage]);

  if (!isLaunched) {
    return (
      <>
        <TempLanding /> 
      </>
    );
  }

  return (
    <>
      <StaticNoise />
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      {activePage === "HomePage" ? <HomePage /> : null}
      {activePage === "AboutPage" ? <AboutPage /> : null}
      {activePage === "WorksPage" ? <WorksPage /> : null}
    </>
  );
}

export default App;