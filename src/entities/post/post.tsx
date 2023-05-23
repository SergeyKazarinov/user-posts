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
    <Card className='mt-4'>
      <Row>
        <Col md={1} xs={1}>
          <Image src='../../../public/placeholder.jpg' className='w-100' roundedCircle />
        </Col>
        <Col>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.body}</Card.Text>
        </Col>
      </Row>
    </Card>

  </Container>
);

export default Post;
