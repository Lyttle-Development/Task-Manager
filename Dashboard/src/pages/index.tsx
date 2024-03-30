import { Layout } from '@lyttledev-dashboard/layouts';
import styles from './index.module.scss';
import { Component } from '@lyttledev-dashboard/components';
import { usePage } from '@lyttledev-dashboard/hooks/usePage';

function Page() {
  const title = usePage('title');

  return (
    <>
      <Component.Title>{title}</Component.Title>
      <Component.Container>
        <section className={styles.landing}>
          <h2>Hello</h2>
          <p className={styles.description}>World</p>
        </section>
      </Component.Container>
    </>
  );
}

Page.getLayout = Layout.getDefault;

export default Page;
