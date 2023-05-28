import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { AboutMe } from 'widgets';

interface UserIdProps {

}

const UserId: FC<UserIdProps> = () => {
  const param = useParams();
  console.log(param);
  return (
    <AboutMe />
  );
};

export default UserId;
