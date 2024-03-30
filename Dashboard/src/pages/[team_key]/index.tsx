import { Layout } from '@lyttledev-dashboard/layouts';
import { Component } from '@lyttledev-dashboard/components';
import { usePage } from '@lyttledev-dashboard/hooks/usePage';

function Page() {
  const title = usePage('title');

  return (
    <>
      <Component.Title>{title}</Component.Title>
      <Component.Container>
        <span>Hello World</span>
      </Component.Container>
    </>
  );
}

Page.getLayout = Layout.getDefault;

export default Page;
