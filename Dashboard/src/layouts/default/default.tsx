import { Component } from '@lyttledev-dashboard/components';
import { Layout } from '@lyttledev-dashboard/layouts';
import React, { useEffect } from 'react';
import { useApp } from '@lyttledev-dashboard/contexts/App.context';
import styles from './default.module.scss';
import { useRouter } from 'next/router';
import { useStartup } from '@lyttledev-dashboard/contexts/app-hooks';

export interface DefaultProps {
  children: React.ReactNode;
}

export function Default({ children }: DefaultProps) {
  const startup = useStartup();
  const app = useApp();
  const mainNavOpen = app?.mainNavOpen ?? false;
  const mobile = app?.mobile ?? true;
  const router = useRouter();

  useEffect(() => {
    if (!mobile) return;
    app?.setMainNavOpen(false);
  }, [router.route]);

  if (startup === null) return <></>;

  return (
    <Layout.Base>
      <Component.Startup mobile={mobile} />
      <div
        className={`default-layout ${mainNavOpen ? 'main-nav--open' : ''} ${
          mobile ? 'mobile' : 'desktop'
        } ${startup ? 'startup' : 'no-startup'}`}
      >
        <Component.MainNav mobile={mobile} />
        <Layout.Transition>
          <section className={`default-layout__content ${styles.body}`}>
            <Component.Header mobile={mobile} />
            <main className={`${styles.main}`}>{children}</main>
            {/*<Component.Footer />*/}
          </section>
        </Layout.Transition>
      </div>
    </Layout.Base>
  );
}

export function getDefault(page: React.ReactNode) {
  return <Default>{page}</Default>;
}
