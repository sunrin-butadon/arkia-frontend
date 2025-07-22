import styles from './chip.module.scss';

interface ChipProps {
  iconComponent?: React.ReactNode;
  label: string;
  isColorful?: boolean;
}

export default function Chip ({iconComponent, label, isColorful}: ChipProps) {
  return (
    <div className={`${styles.chip} ${isColorful ? styles.color_chip : styles.mono_chip}`}>
      {iconComponent && <span className={styles.icon}>{iconComponent}</span>}
      <span className={styles.label}>{label}</span>
    </div>
  );
}