import { useAppDispatch } from 'app/store/app-store';
import { FC } from 'react';
import { Button } from 'react-bootstrap';
import { TOGGLE_BURGER_MENU } from 'shared';

interface BurgerMenuButtonProps {

}

const BurgerMenuButton: FC<BurgerMenuButtonProps> = () => {
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch({ type: TOGGLE_BURGER_MENU });
  };
  return (
    <Button variant='primary' size='lg' onClick={onClick}>Menu</Button>
  );
};

export default BurgerMenuButton;
