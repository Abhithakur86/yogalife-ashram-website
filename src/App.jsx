import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Retreats from "./pages/Retreats";
import Ashram from "./pages/Ashram";
import Teachers from "./pages/Teachers";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/retreats" element={<Retreats />} />
        <Route path="/ashram" element={<Ashram />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
