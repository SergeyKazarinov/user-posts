import { useAppDispatch } from 'app/store/app-store';
import { searchPostActionCreator, setPaginationNumberActionCreator } from 'entities/post';
import { ChangeEvent, FC, useState } from 'react';
import { SearchInput } from 'shared';

const SearchPosts: FC = () => {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();

  const handleSearchPosts = (string: string) => {
    setValue(string);
    dispatch(searchPostActionCreator(string));
    dispatch(setPaginationNumberActionCreator(1));
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleSearchPosts(e.target.value);
  };

  const onClearClick = () => {
    handleSearchPosts('');
  };
  return (
    <SearchInput inputValue={value} onChange={onChange} onClick={onClearClick}/>
  );
};

export default SearchPosts;
