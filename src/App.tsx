import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import TempLanding from "./TempLanding.tsx";
import StaticNoise from "./StaticNoise.tsx";
import Navbar from "./Navbar.tsx";
import HomePage from "./HomePage.tsx";
import AboutPage from "./AboutPage.tsx";
import WorksPage from "./WorksPage.tsx";

function App(): JSX.Element {
  const [isLaunched, setIsLaunched] = useState<boolean>(false);

  useEffect(() => {
    setIsLaunched(true);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 30); // add delay: 0.3s

    return () => clearTimeout(timer);
  }, []);

  if (!isLaunched) {
    return (
      <>
        <TempLanding />
      </>
    );
  }

  return (
    <Router>
      <StaticNoise />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/works" element={<WorksPage />} />
      </Routes>
    </Router>
  );
}

export default App;
