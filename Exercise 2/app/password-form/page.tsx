// app/password-form/page.tsx
'use client';

import { useActionState } from 'react';

async function handlePasswordSubmit(prevState: any, formData: FormData) {
  'use server';
  const password = formData.get('password') as string;

  if (!password || password.length < 6) {
    return { error: 'Password must be at least 6 characters long.' };
  }

  return { success: 'Password accepted successfully!' };
}

export default function PasswordFormPage() {
  const [state, formAction] = useActionState(handlePasswordSubmit, null);

  return (
    <div style={{ padding: '20px' }}>
      <form action={formAction}>
        <div style={{ marginBottom: '10px' }}>
          <label>Password: </label>
          <input type="password" name="password" required placeholder="Enter password" />
        </div>
        <button type="submit">Submit</button>
      </form>

      {state?.error && <p style={{ color: 'red', marginTop: '10px' }}>{state.error}</p>}
      {state?.success && <p style={{ color: 'green', marginTop: '10px' }}>{state.success}</p>}
    </div>
  );
}