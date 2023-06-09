import { PropsWithChildren, useEffect } from 'react';
import Header from '@components/layout/Header';
import { LayoutContainer } from '@styles/style';

function Layout({ children }: PropsWithChildren) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <LayoutContainer>{children}</LayoutContainer>
    </>
  );
}

export default Layout;
