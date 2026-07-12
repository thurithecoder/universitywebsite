import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AiChatbot from './components/AiChatbot';
import ScrollToTop from './components/ScrollToTop';


// Pages
import Homepage from './pages/Home';
import Aboutpage from './pages/About';
import Programspage from './pages/Programs';
import ProgramDetailsPage from './pages/ProgramDetails';
import Contactpage from './pages/Contact';
import Notfoundpage from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/programs" element={<Programspage />} />
          <Route path="/programs/:id" element={<ProgramDetailsPage />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="*" element={<Notfoundpage />} />
        </Routes>
      </main>
      <Footer />
      <AiChatbot />
    </BrowserRouter>
  );
}

export default App;
