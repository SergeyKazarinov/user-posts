import { useAppDispatch, useAppSelector } from 'app/store/app-store';
import { getUserByUserIdActionCreator } from 'entities';
import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AboutMe } from 'widgets';

interface UserIdProps {

}

const UserId: FC<UserIdProps> = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.userReducer.user);
  const param = useParams();

  const handleGetUserById = () => {
    dispatch(getUserByUserIdActionCreator(param.userId!));
  };
  useEffect(() => {
    handleGetUserById();
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <AboutMe />
  );
};

export default UserId;
