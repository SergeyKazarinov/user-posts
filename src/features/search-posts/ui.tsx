import { useAppDispatch } from 'app/store/app-store';
import { searchPostActionCreator, setPaginationNumberActionCreator } from 'entities';
import { ChangeEvent, FC, useState } from 'react';
import { SearchInput } from 'shared';

interface SearchPostsProps {

}

const SearchPosts: FC<SearchPostsProps> = () => {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    dispatch(searchPostActionCreator(e.target.value));
    dispatch(setPaginationNumberActionCreator(1));
  };

  const handleClearClick = () => {
    setValue('');
    dispatch(searchPostActionCreator(''));
    dispatch(setPaginationNumberActionCreator(1));
  };
  return (
    <SearchInput inputValue={value} onChange={handleChange} onClick={handleClearClick}/>
  );
};

export default SearchPosts;
