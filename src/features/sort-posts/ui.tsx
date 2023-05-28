import { useAppDispatch } from 'app/store/app-store';
import { sortValueActionCreator, sortPostActionCreator } from 'entities';
import { ChangeEvent, FC } from 'react';
import { SortInput } from 'shared';
import { TSortValues } from 'types/post';

interface SortPostsProps {

}

const SortPosts: FC<SortPostsProps> = () => {
  const dispatch = useAppDispatch();

  const handleClick = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(sortValueActionCreator(e.target.value as TSortValues));
    dispatch(sortPostActionCreator(e.target.value));
  };

  return (
    <SortInput onClick={handleClick} />
  );
};

export default SortPosts;
