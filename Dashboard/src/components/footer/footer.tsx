import { Component } from '..';
import styles from './footer.module.scss';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Component.Container className={styles.container}>
      <footer className={styles.footer}>
        <ul className={styles.flex}>
          <li>
            <p>© 2013-{currentYear} LyttleDevelopment</p>
          </li>
        </ul>
      </footer>
    </Component.Container>
  );
}
