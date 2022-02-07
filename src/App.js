import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Shared/Footer/Footer";
import Header from "./Components/Shared/Header/Header";
import MobileNav from "./Components/MobileNav/MobileNav";
import LoginPage from "./Pages/LoginPage/LoginPage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <MobileNav/>
        <Routes>
          <Route
            path="/"
            element={
                <Home/>
            }
          />
          <Route
            path="/login"
            element={
                <LoginPage/>
            }
          />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
