import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/home/home.component";
import Navbar from "./components/navbar/navbar.component";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
