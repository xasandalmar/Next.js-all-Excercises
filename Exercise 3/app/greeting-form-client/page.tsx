'use client';

import { useState } from 'react';

export default function GreetingForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFullName(`Hello, ${firstName} ${lastName}!`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <input 
            type="text" 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)} 
            placeholder="First Name" 
            required 
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input 
            type="text" 
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)} 
            placeholder="Last Name" 
            required 
          />
        </div>
        <button type="submit">Greet Me</button>
      </form>

      {fullName && <h2 style={{ marginTop: '15px' }}>{fullName}</h2>}
    </div>
  );
}