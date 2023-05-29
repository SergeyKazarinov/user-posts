import { useAppSelector } from 'app/store/app-store';
import { FC, ReactNode } from 'react';
import {
  Accordion, Card, Container, Spinner,
} from 'react-bootstrap';
import { Comment, ErrorMessage } from 'shared';
import { IComments } from 'types/post';

interface CommentButtonProps {
  postId: number;
  comments: IComments[];
  commentButton?: ReactNode;
}

const CommentButton: FC<CommentButtonProps> = ({ postId, comments, commentButton }) => {
  const commentsErrorMessage = useAppSelector((store) => store.commentReducer.commentsErrorMessage);
  const commentById = comments.filter((item) => item.postId === postId);
  const data = commentById.map((item) => <Comment key={item.id} comment={item}/>);

  return (
    <Accordion>
      <Card className='border-0'>
        <Card.Header className='bg-white border-0 btn-outline-dark '>
          {commentButton}
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            {!commentsErrorMessage
              ? (data.length
                ? data
                : <Container className='text-center mt-5'><Spinner animation="border" variant="primary"/></Container>
              )
              : <ErrorMessage message={commentsErrorMessage} />
            }

          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default CommentButton;
