import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Pages/Shared/Header/Header";
import Slider from "./Pages/Slider/Slider";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Slider/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
