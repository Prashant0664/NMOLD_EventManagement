import './App.css';

import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/AboutUs';
import Pricing from './components/Pricing';
// import { Gallery } from './components/Gallery';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from './components/ContactUs.jsx';
import Footer from './components/Footer';
import Navbar from './components/Navbar.jsx';
import Blogs from './components/Blogs.jsx';
function App() {
  return (
    <>
    {/* <WhyUs/> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
        <ContactUs />
        <Footer />
      </BrowserRouter>
      {/* <Gallery /> */}
    </>
  );
}

export default App;
