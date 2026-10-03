'use client';

import { useState } from 'react';

export default function BasicForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Server/Console Email:', email); // Halkan waxaa lagu log-gareeyaa
    setSubmitted(true);
  };

  return (
    <div style={{ padding: '20px' }}>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Email: </label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            placeholder="name@example.com" 
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {submitted && <p style={{ color: 'green', marginTop: '10px' }}>Thanks for submitting!</p>}
    </div>
  );
}