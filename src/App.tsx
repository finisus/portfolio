import { useState, useEffect } from "react";
import TempLanding from "./TempLanding.tsx";
import StaticNoise from "./StaticNoise.tsx";
import Navbar from "./Navbar.tsx";

import Footer from "./Footer.tsx";

function App(): JSX.Element {
  const [isLaunched, setIsLaunched] = useState<boolean>(false);

  useEffect(() => {
    setIsLaunched(false);
  }, []);

  

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
      <Navbar />    

      <Footer />
    </>
  );
}

export default App;