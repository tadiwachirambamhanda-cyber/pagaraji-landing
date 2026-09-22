# PaGaraji landing page

Marketing/waitlist page for [PaGaraji](https://github.com/tadiwachirambamhanda-cyber/PaGaraji), Zimbabwe's spare-parts marketplace app. Next.js (App Router), no CSS framework — brand tokens are hand-matched to the app's `src/theme.ts` (Baloo 2 + Manrope, teal/sunflower/orange "Market stall" look).

## What it does

A single page: hero, feature grid, "how it works", and a waitlist email form. The app isn't published to app stores yet (Expo Go only), so the only call to action is joining the waitlist — no download links.

The waitlist form is a Next.js Server Action (`src/app/actions.ts`) that inserts into a `waitlist` table in the **same Supabase project the app uses** (`erpqzmqxmwdmsnraqtxl`), via the public anon key — already shipped inside the app bundle, so nothing new is exposed. RLS lets anyone insert; nobody (not even signed-in users) can read the list back through the API — only the project owner, via the Supabase dashboard or SQL editor.

## Local development

```bash
npm install
npm run dev
```

Needs a `.env.local` with:

```
SUPABASE_URL=https://erpqzmqxmwdmsnraqtxl.supabase.co
SUPABASE_ANON_KEY=<the same anon/publishable key the app uses>
```

## Deploying

Built for Vercel. Set the same two env vars in the Vercel project settings, then connect this repo — no other config needed.
