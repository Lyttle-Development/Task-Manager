import styles from './main-nav-item.module.scss';
import { Component } from '@lyttledev-dashboard/components';

export interface MainNavItemProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  route?: string;
}

export function MainNavItem({
  href,
  onClick,
  children,
  route,
}: MainNavItemProps) {
  route = route ?? href;
  return (
    <Component.Link
      href={href}
      route={route}
      onClick={onClick}
      className={styles['main-menu-item']}
      classNameActive={styles['main-menu-item--active']}
    >
      {children}
    </Component.Link>
  );
}
