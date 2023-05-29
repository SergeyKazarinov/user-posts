import { FC } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

interface BackButtonProps {

}

const BackButton: FC<BackButtonProps> = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };
  return (
    <Button className='position-fixed end-0 bottom-0 m-5' size='lg' onClick={handleClick}>Back</Button>
  );
};

export default BackButton;
