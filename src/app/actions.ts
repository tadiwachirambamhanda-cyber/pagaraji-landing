'use server';

import { supabase } from '@/lib/supabase';

export type WaitlistState = {
  status: 'idle' | 'success' | 'error';
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function joinWaitlist(_prev: WaitlistState, formData: FormData): Promise<WaitlistState> {
  const email = String(formData.get('email') ?? '')
    .trim()
    .toLowerCase();

  if (!EMAIL_RE.test(email)) {
    return { status: 'error', message: 'That doesn’t look like a valid email address.' };
  }
  if (!supabase) {
    return { status: 'error', message: 'The waitlist isn’t set up yet — try again later.' };
  }

  const { error } = await supabase.from('waitlist').insert({ email });
  if (error) {
    // Already signed up — treat that as success rather than an error.
    if (error.code === '23505') return { status: 'success' };
    return { status: 'error', message: 'Something went wrong — try again in a moment.' };
  }
  return { status: 'success' };
}
