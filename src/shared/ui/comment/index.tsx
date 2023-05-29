import { FC } from 'react';
import { Card } from 'react-bootstrap';
import { IComments } from 'types/post';

interface CommentProps {
  comment: IComments
}

const Comment: FC<CommentProps> = ({ comment }) => (
  <Card>
    <Card.Body>
      <Card.Title>
        {comment.email}
      </Card.Title>
      <Card.Text>
        {comment.body}
      </Card.Text>
    </Card.Body>
  </Card>
);

export default Comment;
