import { FC, ReactNode } from 'react';
import { Accordion, Card } from 'react-bootstrap';
import { IComments } from 'types/post';

interface CommentButtonProps {
  postId: number;
  comments: IComments[];
  commentButton?: ReactNode;
}

const CommentButton: FC<CommentButtonProps> = ({ postId, comments, commentButton }) => {
  const dataByPostId = comments.filter((item) => item.postId === postId);
  const data = dataByPostId.map((item) => <li key={item.id}>{item.body}</li>);

  return (
    <Accordion>
      <Card>
        <Card.Header className='bg-white border-0 btn-outline-dark '>
          {commentButton}
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>{data}</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default CommentButton;
