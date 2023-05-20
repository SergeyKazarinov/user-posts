import { FC } from 'react';
import { Button } from 'react-bootstrap';

interface BurgerMenuButtonProps {

}

const BurgerMenuButton: FC<BurgerMenuButtonProps> = () => {
  const onClick = () => {
    console.log('click');
  };
  return (
    <Button variant='primary' size='lg' onClick={onClick}>Menu</Button>
  );
};

export default BurgerMenuButton;
