import styles from './stamp.module.css';

/** Rubber-stamp style badge: dashed outline, slight tilt — same motif as the app's origin tags. */
export function Stamp({ label }: { label: string }) {
  return <span className={styles.stamp}>{label}</span>;
}
