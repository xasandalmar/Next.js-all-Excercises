// app/basic-form/page.tsx
'use client';

import { useActionState } from 'react';

async function handleEmailSubmit(prevState: any, formData: FormData) {
  'use server';
  const email = formData.get('email');
  
  // Wuxuu ku qorayaa server-ka console-kiisa
  console.log('Server received email:', email);

  return { success: true, message: 'Thanks for submitting!' };
}

export default function BasicFormPage() {
  const [state, formAction] = useActionState(handleEmailSubmit, null);

  return (
    <div style={{ padding: '20px' }}>
      <form action={formAction}>
        <div style={{ marginBottom: '10px' }}>
          <label>Email: </label>
          <input type="email" name="email" required placeholder="name@example.com" />
        </div>
        <button type="submit">Submit</button>
      </form>

      {state?.success && <p style={{ color: 'green', marginTop: '10px' }}>{state.message}</p>}
    </div>
  );
}