import React from 'react';
import Corusel from './Corusel';

function Home() {
  return (
    <div style={{
      overflow: 'hidden', width: '100%', height: '100%', position: 'relative',
    }}
    >
      <Corusel />
    </div>
  );
}

export default Home;
