import { useAppDispatch } from 'app/store/app-store';
import { setPaginationNumberActionCreator } from 'entities';
import { FC } from 'react';
import { Pagination } from 'react-bootstrap';
import { IPost } from 'types/post';

interface PaginationProps {
  array: IPost[];
  activeNumber: number
}

const PaginationList: FC<PaginationProps> = ({ array, activeNumber }) => {
  const dispatch = useAppDispatch();

  const handleChangePaginationItem = (number: number) => {
    dispatch(setPaginationNumberActionCreator(number));
  };

  const numberPagination = Math.ceil(array.length / 10);

  const items = [];
  for (let number = 1; number <= numberPagination; number += 1) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === activeNumber}
        onClick={() => handleChangePaginationItem(number)}
      >
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <Pagination className='flex-row justify-content-center mt-3' size='lg'>
      {items}
    </Pagination>
  );
};

export default PaginationList;
