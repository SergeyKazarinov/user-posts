import { FC } from 'react';
import { Card } from 'react-bootstrap';
import { IPost } from 'types/post';

interface PostProps {
  item: IPost
}

const Post: FC<PostProps> = ({ item }) => (
  <Card>
    <Card.Title>{item.title}</Card.Title>
    <Card.Text>{item.body}</Card.Text>
  </Card>
);

export default Post;
