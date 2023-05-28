import { ChangeEvent, FC } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { DEFAULT, ASC, DESC } from 'shared';

interface SortInputProps {
  onClick(e: ChangeEvent<HTMLSelectElement>): void;
}

const SortInput: FC<SortInputProps> = ({ onClick }) => (
  <Row className='flex-row align-items-center'>
    <Col md='auto' className='ps-5'>
      <Form.Label htmlFor="inputSort">Сортировка</Form.Label>
    </Col>
    <Col md='auto' className='p-0'>
      <Form.Select onChange={onClick} id='inputSort' aria-label="sort posts" defaultValue={DEFAULT}>
        <option value={DEFAULT}>По умолчанию</option>
        <option value={ASC}>По возрастанию</option>
        <option value={DESC}>По убыванию</option>
      </Form.Select>
    </Col>
  </Row>
);

export default SortInput;
