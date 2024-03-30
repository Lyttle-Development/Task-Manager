import styles from './header.module.scss';
import { Component } from '@lyttledev-dashboard/components';
import { useApp } from '@lyttledev-dashboard/contexts/App.context';

export interface HeaderProps {
  mobile: boolean;
}

export function Header({ mobile }: HeaderProps) {
  const app = useApp();
  const title = app?.pageTitle ?? 'Home';

  const onHamburgerClick = () => {
    app?.setMainNavOpen(true);
  };

  return (
    <Component.Container>
      <header className={styles.header}>
        {mobile && (
          <Component.Button
            className={styles.hamburger}
            onClick={onHamburgerClick}
          >
            Menu
          </Component.Button>
        )}
        <h1 className={styles.title}>{title}</h1>
        <section
          className={`${styles.navigation} ${mobile ? styles.hide : ''}`}
        >
          {/* // Currently disabled, will be added in the future! // */}
          {/* <Component.Search />*/}
          {/* <Component.Avatar />*/}
        </section>
      </header>
    </Component.Container>
  );
}
