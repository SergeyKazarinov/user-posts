import { ChangeEvent, FC } from 'react';
import {
  Row, Col, FloatingLabel, Form, CloseButton, Container,
} from 'react-bootstrap';

interface SearchInputProps {
  inputValue: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

const SearchInput: FC<SearchInputProps> = ({ inputValue, onChange, onClick }) => (
  <Container fluid='true'>
    <Row className='align-items-center flex-nowrap w-100'>
      <Col className='' sm='10' xs='10'>
        <FloatingLabel
          controlId="floatingInput"
          label="Search Post"
        >
          <Form.Control type='text' placeholder="Search" value={inputValue} onChange={onChange} />
        </FloatingLabel>
      </Col>
      <Col className='p-0'>
        <CloseButton onClick={onClick} />
      </Col>
    </Row>
  </Container>
);

export default SearchInput;
