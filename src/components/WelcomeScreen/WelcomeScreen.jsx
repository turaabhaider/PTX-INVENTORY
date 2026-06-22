// src/components/WelcomeScreen/WelcomeScreen.jsx
import React, { useEffect, useState } from 'react';
import './WelcomeScreen.css';

const WelcomeScreen = ({ onComplete }) => {
  const [phase, setPhase] = useState('enter');

  useEffect(() => {
    const holdTimer = setTimeout(() => setPhase('exit'), 2800);
    const doneTimer = setTimeout(() => {
      setPhase('done');
      onComplete?.();
    }, 3800);

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  if (phase === 'done') return null;

  return (
    <div className={`ws-root ws-phase-${phase}`} aria-hidden="true">
      <div className="ws-grain" />

      <div className="ws-panel ws-panel-top">
        <div className="ws-panel-inner">
          <div className="ws-sweep" />
          <div className="ws-brand">
            <div className="ws-logo-wrap">
              <span className="ws-letter ws-l1">P</span>
              <span className="ws-letter ws-l2">T</span>
              <span className="ws-letter ws-l3">X</span>
            </div>
            <div className="ws-rule" />
            <p className="ws-tagline">Pakistan Textile Exchange</p>
          </div>
          <span className="ws-meta ws-meta-tl">PTX</span>
          <span className="ws-meta ws-meta-tr">PKX — 001</span>
        </div>
      </div>

      <div className="ws-panel ws-panel-bot">
        <div className="ws-panel-inner">
          <div className="ws-ticker">
            <div className="ws-ticker-bar" />
          </div>
          <span className="ws-meta ws-meta-bl">KARACHI</span>
          <span className="ws-meta ws-meta-br">COLLECTION 2024</span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;