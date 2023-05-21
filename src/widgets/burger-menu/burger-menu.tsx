import { useAppDispatch, useAppSelector } from 'app/store/app-store';
import { toggleBurgerMenuAction } from 'entities';
import { FC } from 'react';
import {
  Col, Container, Image, Nav, Offcanvas, Row,
} from 'react-bootstrap';
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
      <Offcanvas.Body className='flex-column text-center'>
        <Container className='m-2'>
          <Row>
            <Col>
              <Image src='../../../public/placeholder.jpg' className='w-50' roundedCircle />
            </Col>
          </Row>
          <Row className='m-2'>
            <Col>Сергей</Col>
          </Row>
          <Row>
            <Col>kazarinov092@gmail.com</Col>
          </Row>
        </Container>
        <Nav activeKey={location.pathname} variant='pills' className="flex-column">
          <Nav.Link href="/" eventKey="/">Список постов</Nav.Link>
          <Nav.Link href='/about-me' eventKey="/about-me">Обо мне</Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default BurgerMenu;
