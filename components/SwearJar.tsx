import { useState } from 'react';

export function SwearJar() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="text-center">
      <h1 className="text-4xl mb-4">Virtual Swear Jar</h1>
      <div className="text-6xl font-bold mb-4">{count}</div>
      <button 
        className="bg-blue-500 text-white px-6 py-3 rounded-lg text-xl"
        onClick={() => setCount(count + 1)}
      >
        Add a Swear
      </button>
    </div>
  );
}