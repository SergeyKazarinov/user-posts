import { FC } from 'react';
import {
  Button, Col, Container, Row,
} from 'react-bootstrap';

interface HeaderProps {

}

const Header: FC<HeaderProps> = () => (
  <header>
    <Container>
      <Row className='bg-secondary'>
        <Col className='d-flex flex-row-reverse'>
          <Button variant='primary' size='lg'>Menu</Button>
        </Col>
      </Row>
    </Container>
  </header>

);

export default Header;
