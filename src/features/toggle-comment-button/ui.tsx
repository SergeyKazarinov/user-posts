import { useAppDispatch } from 'app/store/app-store';
import {
  clearCommentErrorActionCreator,
  getAllCommentsActionCreator,
} from 'entities/comments';
import { FC, useState } from 'react';
import { Button, useAccordionButton } from 'react-bootstrap';

interface IToggleCommentButton {
  children: string;
  eventKey: string;
}

const ToggleCommentButton: FC<IToggleCommentButton> = ({ children, eventKey }) => {
  const [isComment, setIsComment] = useState(false);

  const dispatch = useAppDispatch();
  const decoratedOnClick = useAccordionButton(eventKey, () => {
    if (!isComment) {
      dispatch(getAllCommentsActionCreator());
    }
    setIsComment((state) => !state);
    dispatch(clearCommentErrorActionCreator());
  });

  return (
    <Button variant="secondary" onClick={decoratedOnClick}>{children}</Button>
  );
};

export default ToggleCommentButton;
