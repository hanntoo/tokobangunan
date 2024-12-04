import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Rental from './pages/Rental';
import Material from './pages/Material';
import Tentang from './pages/Tentang';
import Excavator from './pages/rentalDetail/Excavator';
import Bulldozer from './pages/rentalDetail/Bulldozer';
import Crane from './pages/rentalDetail/Crane';
import Pasir from './pages/materialDetail/Pasir';
import BatuSplit from './pages/materialDetail/BatuSplit';
import Semen from './pages/materialDetail/Semen';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rental" element={<Rental />} />
          <Route path="/material" element={<Material />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/rental/excavator" element={<Excavator/>} />
          <Route path="/rental/bulldozer" element={<Bulldozer/>} />
          <Route path="/rental/crane" element={<Crane/>} />
          <Route path="/material/pasir" element={<Pasir/>} />
          <Route path="/material/batusplit" element={<BatuSplit/>} />
          <Route path="/material/semen" element={<Semen/>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
