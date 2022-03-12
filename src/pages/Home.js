import React from 'react';

export default function Home() {
  return (
    <header>
      <div className='p-5 text-center bg-image'>
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}></div>
        <div className='contentHome'>
          <h2>React App</h2>  
        </div>
      </div>
    </header>
  );
}