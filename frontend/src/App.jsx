import Home from "../src/components/pages/Home";
import Contact from "../src/components/pages/Contact";
import About from "../src/components/pages/About";
import Business from "../src/components/pages/Business";
import Navbar from "../src/components/widgets/Navbar";
import { Routes, Route } from 'react-router-dom';
import Footer from "./components/widgets/Footer";
export default function App() {
  return (
    <div className="bg-white scroll-smooth">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/business" element={<Business />} />
      </Routes>
      <Footer />
    </div>
  );
}

