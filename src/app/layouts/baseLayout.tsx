import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { BurgerMenu, Header } from 'widgets';

const Layout: FC = () => (
  <>
    <Header />
    <BurgerMenu />
    <main>
      <Outlet />
    </main>
  </>
);

export default Layout;
