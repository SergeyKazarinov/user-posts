import { useAppDispatch, useAppSelector } from 'app/store/app-store';
import { FC } from 'react';
import { Button } from 'react-bootstrap';
import { TOGGLE_BURGER_MENU } from 'shared';

interface BurgerMenuButtonProps {

}

const BurgerMenuButton: FC<BurgerMenuButtonProps> = () => {
  const dispatch = useAppDispatch();
  const isBurger = useAppSelector((store) => store.toggleBurgerMenuReducer.isBurger);

  const onClick = () => {
    dispatch({ type: TOGGLE_BURGER_MENU });
    console.log(isBurger);
  };
  return (
    <Button variant='primary' size='lg' onClick={onClick}>Menu</Button>
  );
};

export default BurgerMenuButton;
