import { Logo } from '@/components/logo';
import { PriceTag } from '@/components/price-tag';
import { Stamp } from '@/components/stamp';
import { WaitlistForm } from '@/components/waitlist-form';
import styles from './page.module.css';

const FEATURES = [
  {
    title: 'Local & import, one place',
    text: 'Switch between parts already in Zimbabwe and ones shipped in from Dubai or China — price, condition and lead time side by side.',
    icon: <SwapIcon />,
  },
  {
    title: 'Verified suppliers',
    text: 'Import sellers go through an approval process before they earn the Verified badge, so you know who you’re dealing with.',
    icon: <CheckIcon />,
  },
  {
    title: 'Chat, not guesswork',
    text: 'Message a seller directly in the app, or jump straight to WhatsApp — ask about fitment or delivery before you commit.',
    icon: <ChatIcon />,
  },
  {
    title: 'Photos on every part',
    text: 'Sellers and buyers can both add real photos, so listings and requests show exactly what’s on offer or what’s needed.',
    icon: <CameraIcon />,
  },
  {
    title: 'Ratings you can trust',
    text: 'Every seller builds a public rating from real buyers who actually messaged and dealt with them — not a number anyone can fake.',
    icon: <StarIcon />,
  },
  {
    title: 'Built for Zimbabwe',
    text: 'Prices in USD, WhatsApp handoff, local delivery times — built around how parts actually move here, not copied from elsewhere.',
    icon: <PinIcon />,
  },
];

const STEPS = [
  { title: 'Post what you need or have', text: 'A request or a listing, with real photos.' },
  { title: 'Chat with a real person', text: 'Ask questions, agree on price and delivery.' },
  { title: 'Deal done, part sorted', text: 'Mark it sold, rate the seller, move on.' },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.nav}>
        <Logo size={26} />
        <a href="#waitlist" className={styles.navLink}>
          Join the waitlist
        </a>
      </header>

      <section className={styles.hero}>
        <Stamp label="COMING SOON · ZIMBABWE" />
        <h1 className={styles.heroTitle}>Spare parts, sorted.</h1>
        <p className={styles.heroSubtitle}>
          PaGaraji is Zimbabwe’s marketplace for genuine car parts — buy and sell locally, or bring parts in
          from Dubai and China. Real sellers, verified suppliers, direct chat, no more guessing.
        </p>
        <div id="waitlist" className={styles.heroForm}>
          <WaitlistForm />
          <p className={styles.heroNote}>No spam — one email, the day it’s ready to download.</p>
        </div>
        <div className={styles.heroTags} aria-hidden="true">
          <PriceTag price="$45" />
          <PriceTag price="$120" />
          <PriceTag price="$18" />
        </div>
      </section>

      <section className={styles.features}>
        <h2 className={styles.sectionTitle}>Everything a parts run usually takes, in one app</h2>
        <div className={styles.featureGrid}>
          {FEATURES.map((f) => (
            <div key={f.title} className={styles.featureCard}>
              <div className={styles.featureIcon}>{f.icon}</div>
              <h3 className={styles.featureTitle}>{f.title}</h3>
              <p className={styles.featureText}>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.steps}>
        <h2 className={styles.sectionTitle}>How it works</h2>
        <div className={styles.stepsRow}>
          {STEPS.map((s, i) => (
            <div key={s.title} className={styles.step}>
              <span className={styles.stepNumber}>{i + 1}</span>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepText}>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.footerCta}>
        <h2 className={styles.footerCtaTitle}>Be first to know when it’s live</h2>
        <WaitlistForm />
      </section>

      <footer className={styles.footer}>
        <Logo size={22} />
        <p className={styles.footerText}>Harare, Zimbabwe · © {new Date().getFullYear()} PaGaraji</p>
      </footer>
    </div>
  );
}

function SwapIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 7h11m0 0-3-3m3 3-3 3M17 17H6m0 0 3 3m-3-3 3-3"
        stroke="var(--header)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2 4 5.5v6c0 5 3.4 8.7 8 9.5 4.6-.8 8-4.5 8-9.5v-6L12 2Z"
        stroke="var(--header)"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <path d="M8.5 12.2l2.3 2.3 4.7-4.9" stroke="var(--header)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 5.5h16v10.5H8.5L4 20V5.5Z" stroke="var(--header)" strokeWidth={2} strokeLinejoin="round" />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 8h3l1.5-2h7L17 8h3v11H4V8Z" stroke="var(--header)" strokeWidth={2} strokeLinejoin="round" />
      <circle cx="12" cy="13.5" r="3.2" stroke="var(--header)" strokeWidth={2} />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--accent)" aria-hidden="true">
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 22s7-7.3 7-12.5A7 7 0 0 0 5 9.5C5 14.7 12 22 12 22Z" stroke="var(--header)" strokeWidth={2} strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.4" stroke="var(--header)" strokeWidth={2} />
    </svg>
  );
}
