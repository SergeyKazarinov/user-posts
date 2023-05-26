import { ChangeEvent, FC } from 'react';
import {
  Row, Col, FloatingLabel, Form, CloseButton,
} from 'react-bootstrap';

interface SearchInputProps {
  inputValue: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

const SearchInput: FC<SearchInputProps> = ({ inputValue, onChange, onClick }) => (
  <Row className='w-75 mx-auto mt-3 flex-row align-items-center'>
    <Col>
      <FloatingLabel
        controlId="floatingInput"
        label="Search Post"
      >
        <Form.Control type='text' placeholder="Поиск" value={inputValue} onChange={onChange}/>
      </FloatingLabel>
    </Col>
    <Col md='auto' className='p-0'>
      <CloseButton onClick={onClick} />
    </Col>
  </Row>
);

export default SearchInput;
