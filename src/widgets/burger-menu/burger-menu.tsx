import { useAppDispatch, useAppSelector } from 'app/store/app-store';
import { toggleBurgerMenuAction } from 'entities';
import { FC } from 'react';
import { Nav, Offcanvas } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

interface BurgerMenuProps {

}

const BurgerMenu: FC<BurgerMenuProps> = () => {
  const isBurger = useAppSelector((store) => store.toggleBurgerMenuReducer.isBurger);
  const dispatch = useAppDispatch();
  const location = useLocation();

  const handleClose = () => {
    dispatch(toggleBurgerMenuAction());
  };

  return (
    <Offcanvas show={isBurger} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        Сергей
        kazarionv092@gmail.com
        <Nav activeKey={location.pathname} variant='pills' className="flex-column">
          <Nav.Link href="/" eventKey="/">Список постов</Nav.Link>
          <Nav.Link href='/about-me' eventKey="/about-me">Обо мне</Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default BurgerMenu;
