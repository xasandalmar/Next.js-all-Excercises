// app/greeting-form/page.tsx
'use client';

import { useActionState } from 'react';

async function handleGreeting(prevState: any, formData: FormData) {
  'use server';
  const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');

  return { greeting: `Hello, ${firstName} ${lastName}!` };
}

export default function GreetingPage() {
  const [state, formAction] = useActionState(handleGreeting, null);

  return (
    <div style={{ padding: '20px' }}>
      <form action={formAction}>
        <div style={{ marginBottom: '10px' }}>
          <input type="text" name="firstName" placeholder="First Name" required />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input type="text" name="lastName" placeholder="Last Name" required />
        </div>
        <button type="submit">Greet Me</button>
      </form>

      {state?.greeting && <h2 style={{ marginTop: '15px' }}>{state.greeting}</h2>}
    </div>
  );
}