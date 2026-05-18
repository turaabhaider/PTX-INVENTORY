// src/App.jsx
import React, { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor/CustomCursor';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import CategoryGrid from './components/CategoryGrid/CategoryGrid';
import MensPage from './components/MensPage/MensPage';
import JuniorsPage from './components/JuniorsPage/JuniorsPage';
import Footer from './components/Footer/Footer';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';

function App() {
  const [view, setView] = useState('home');
  const [welcomed, setWelcomed] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  return (
    <>
      {!welcomed && <WelcomeScreen onComplete={() => setWelcomed(true)} />}

      <CustomCursor />
      <Navbar currentView={view} setView={setView} />

      {view === 'home' && (
        <>
          <Hero />
          <CategoryGrid setView={setView} />
        </>
      )}

      {view === 'mens' && <MensPage currentView={view} />}
      {view === 'juniors' && <JuniorsPage currentView={view} />}

      <Footer />
    </>
  );
}

export default App;