import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { BurgerMenu, Header } from 'widgets';

interface LayoutProps {

}

const Layout: FC<LayoutProps> = () => (
  <>
    <Header />
    <BurgerMenu />
    <main>
      <Outlet />
    </main>
  </>
);

export default Layout;
