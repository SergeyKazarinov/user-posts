import { BurgerMenuButton } from 'features/burger-menu-button';
import { FC } from 'react';
import {
  Col, Container, Row,
} from 'react-bootstrap';

interface HeaderProps {

}

const Header: FC<HeaderProps> = () => (
  <header>
    <Container>
      <Row className='bg-secondary'>
        <Col className='d-flex flex-row-reverse'>
          <BurgerMenuButton />
        </Col>
      </Row>
    </Container>
  </header>

);

export default Header;
