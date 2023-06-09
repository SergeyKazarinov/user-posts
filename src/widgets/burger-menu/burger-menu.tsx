import { useAppDispatch, useAppSelector } from 'app/store/app-store';
import { toggleBurgerMenuAction } from 'entities/burger-menu';
import { FC } from 'react';
import {
  Col, Container, Image, Nav, Offcanvas, Row,
} from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import image from 'assets/placeholder.jpg';

const BurgerMenu: FC = () => {
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
      <Offcanvas.Body className='flex-column'>
        <Container className='m-2  text-center'>
          <Row>
            <Col>
              <Image src={image} className='w-50' roundedCircle />
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
