import { FC } from 'react';
import {
  Card, Col, Container, Image, Row,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IPost } from 'types/post';

interface PostProps {
  item: IPost
  commentButton?: React.ReactNode
}

const Post: FC<PostProps> = ({ item, commentButton }) => (
  <Container >
    <Card className='mt-4'>
      <Row>
        <Col md={1} xs={1}>
          <Link to={'/users/1'}>
            <Image src='../../../public/placeholder.jpg' className='w-100' roundedCircle />
          </Link>
        </Col>
        <Col>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.body}</Card.Text>
          {commentButton}
        </Col>
      </Row>
    </Card>

  </Container>
);

export default Post;
