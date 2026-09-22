import styles from './price-tag.module.css';

const NOTCH = 10;

/** Sunflower price tag with a notched left edge, like a hang-tag on a part — decorative accent. */
export function PriceTag({ price }: { price: string }) {
  return (
    <span className={styles.row}>
      <svg width={NOTCH} height={36} aria-hidden="true">
        <polygon points={`${NOTCH},0 ${NOTCH},36 0,18`} fill="var(--accent)" />
      </svg>
      <span className={styles.body}>{price}</span>
    </span>
  );
}
