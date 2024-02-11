import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ButtonPage from "./pages/ButtonPage";
import BadgePage from "./pages/BadgePage";
import CardPage from "./pages/CardPage";
import AlertPage from "./pages/AlertPage";
import Header from "./components/Header";

export default function App() {
  return (
    <Router>
    <>
    <div className="absolute inset-0 bg-bottom bg-no-repeat bg-[url('./assets/backgroundimage.jpg')] bg-cover" >
    <Header />
    <Routes>
    <Route path="/" element={<HomePage />} />
          <Route path="/buttons" element={<ButtonPage />} />
          <Route path="/alerts" element={<AlertPage />} />
          <Route path="/badgets" element={<BadgePage />} />
          <Route path="/cards" element={<CardPage />} />
      </Routes>
      </div>
    </>
    </Router>
  );
}
