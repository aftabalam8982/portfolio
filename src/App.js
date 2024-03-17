import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/home/home.component";
import Navbar from "./components/navbar/navbar.component";
import Skills from "./components/skills/skill.component";
import About from "./components/about/about.component";
import Footer from "./components/footer/footer.component";
import { useState } from "react";
import Credits from "./components/credits/credits.component";

function App() {
  const [showCreditsModal, setShowCreditsModal] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Home />
        <Skills />
        <About />
        <Footer setShowCreditsModal={setShowCreditsModal} />
        {showCreditsModal ? (
          <Credits setShowCreditsModal={setShowCreditsModal} />
        ) : null}
      </BrowserRouter>
    </div>
  );
}

export default App;
