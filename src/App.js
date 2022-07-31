import "./App.css";
import React from "react";
import Home from "./components/Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/Pages/About/About";
import Contact from "./components/Pages/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Members from "./components/Pages/Members/Members";
import NotFound from "./components/Pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{ minHeight: "90vh" }}>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/members" element={<Members />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
