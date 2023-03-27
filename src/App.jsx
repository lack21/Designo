import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Company from "./components/Company";
import Location from "./components/Location";
import Contact from "./components/Contact";
import WebDesign from "./components/WebDesign";
import AppDesign from "./components/AppDesign";
import GraphicDesign from "./components/GraphicDesign";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Designo" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="company" element={<Company />} />
          <Route path="location" element={<Location />} />
          <Route path="contact" element={<Contact />} />
          <Route path="webdesign" element={<WebDesign />} />
          <Route path="appdesign" element={<AppDesign />} />
          <Route path="graphicdesign" element={<GraphicDesign />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
