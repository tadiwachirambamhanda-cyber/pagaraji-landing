import { createClient } from '@supabase/supabase-js';

const url = process.env.SUPABASE_URL;
const anonKey = process.env.SUPABASE_ANON_KEY;

// Same project the PaGaraji app uses, same anon (publishable) key — it's already
// shipped inside the app bundle, so there's nothing more sensitive about it here.
// Only used server-side (in the waitlist Server Action), never sent to the client.
export const supabase = url && anonKey ? createClient(url, anonKey) : null;
