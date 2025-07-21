import React from 'react';
import Waitlist from '../components/Waitlist';
import AnimatedHero from '../components/AnimatedHero';

const WaitlistPage = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <AnimatedHero />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Waitlist />
      </div>
    </div>
  );
};

export default WaitlistPage;