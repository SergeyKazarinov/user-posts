import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'widgets/header';

interface LayoutProps {

}

const Layout: FC<LayoutProps> = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
  </>
);

export default Layout;
