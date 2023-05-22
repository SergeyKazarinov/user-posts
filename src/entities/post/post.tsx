import { FC } from 'react';
import {
  Card, Col, Container, Image, Row,
} from 'react-bootstrap';
import { IPost } from 'types/post';

interface PostProps {
  item: IPost
}

const Post: FC<PostProps> = ({ item }) => (
  <Container >
    <Row className='mt-4'>
      <Col md={1} xs={1}>
        <Image src='../../../public/placeholder.jpg' className='w-100' roundedCircle />
      </Col>
      <Col>
        <Card>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.body}</Card.Text>
        </Card>
      </Col>
    </Row>

  </Container>
);

export default Post;
