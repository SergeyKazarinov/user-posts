import { useAppDispatch } from 'app/store/app-store';
import { getAllCommentsActionCreator } from 'entities';
import { FC } from 'react';
import {
  Accordion, Button, Card, useAccordionButton,
} from 'react-bootstrap';
import { IComments } from 'types/post';

interface CommentButtonProps {
  postId: number;
  comments: IComments[]
}

interface ICustomToggleProps {
  children: string;
  eventKey: string;
}

const CustomToggle: FC<ICustomToggleProps> = ({ children, eventKey }) => {
  const dispatch = useAppDispatch();
  const decoratedOnClick = useAccordionButton(eventKey, () => {
    dispatch(getAllCommentsActionCreator());
  });

  return (
    <Button variant="secondary" onClick={decoratedOnClick}>{children}</Button>
  );
};

const CommentButton: FC<CommentButtonProps> = ({ postId, comments }) => {
  const dataByPostId = comments.filter((item) => item.postId === postId);
  const data = dataByPostId.map((item) => <li key={item.id}>{item.body}</li>);

  return (
    <Accordion>
      <Card>
        <Card.Header className='bg-white border-0 btn-outline-dark '>
          <CustomToggle eventKey="0">Комментарии</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>{data}</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default CommentButton;
