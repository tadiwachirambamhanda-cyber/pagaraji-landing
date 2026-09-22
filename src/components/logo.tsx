import styles from './logo.module.css';

type LogoProps = {
  size?: number;
};

/** The same wordmark as the app: "Pa" in sunflower, a tilted wrench, "Garaji" in ink. */
export function Logo({ size = 32 }: LogoProps) {
  return (
    <span className={styles.row} style={{ fontSize: size }}>
      <span className={styles.pa}>Pa</span>
      <svg
        className={styles.wrench}
        width={size * 0.32}
        height={size * 0.32}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true">
        <path
          d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6.6 6.6a1.5 1.5 0 0 0 2.1 2.1l6.6-6.6a4 4 0 0 0 5.4-5.4l-2.7 2.7-2-2 2.6-2.8z"
          stroke="var(--primary)"
          strokeWidth={2}
          strokeLinejoin="round"
        />
      </svg>
      <span className={styles.garaji}>Garaji</span>
    </span>
  );
}
