'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';

import { joinWaitlist, type WaitlistState } from '@/app/actions';
import styles from './waitlist-form.module.css';

const initialState: WaitlistState = { status: 'idle' };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className={styles.button} disabled={pending}>
      {pending ? 'Joining…' : 'Join the waitlist'}
    </button>
  );
}

export function WaitlistForm() {
  const [state, formAction] = useActionState(joinWaitlist, initialState);

  if (state.status === 'success') {
    return (
      <p className={styles.success}>
        You’re on the list! We’ll email you the moment PaGaraji is ready to download.
      </p>
    );
  }

  return (
    <form action={formAction} className={styles.form} noValidate>
      <div className={styles.field}>
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          required
          className={styles.input}
          aria-label="Email address"
        />
        <SubmitButton />
      </div>
      {state.status === 'error' && <p className={styles.error}>{state.message}</p>}
    </form>
  );
}
