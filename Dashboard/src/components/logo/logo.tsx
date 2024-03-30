import styles from './logo.module.scss';

export interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return <span className={styles.logo}>Task Manager</span>;
}
