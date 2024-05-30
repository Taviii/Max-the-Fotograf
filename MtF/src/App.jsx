import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import Navbar from "./Navbar.jsx";
import Contact from "./pages/Contact.jsx";
import Prints from "./pages/Prints.jsx";
import Services from "./pages/Services.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio.jsx";

function App() {

  return(
      <BrowserRouter>
    <Navbar/>
    <div>
        <Routes>
          <Route index element={<Portfolio />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/prints" element={<Prints/>} />
        </Routes>
    </div>
        <Footer/>
        </BrowserRouter>
  );
}

export default App
