import { useAppDispatch } from 'app/store/app-store';
import { getAllCommentsActionCreator } from 'entities';
import { FC } from 'react';
import { Button, useAccordionButton } from 'react-bootstrap';

interface IToggleCommentButton {
  children: string;
  eventKey: string;
}

const ToggleCommentButton: FC<IToggleCommentButton> = ({ children, eventKey }) => {
  const dispatch = useAppDispatch();
  const decoratedOnClick = useAccordionButton(eventKey, () => {
    dispatch(getAllCommentsActionCreator());
  });

  return (
    <Button variant="secondary" onClick={decoratedOnClick}>{children}</Button>
  );
};

export default ToggleCommentButton;
