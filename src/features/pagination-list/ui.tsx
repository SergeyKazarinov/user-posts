import { useAppDispatch } from 'app/store/app-store';
import { setPaginationNumberActionCreator } from 'entities/post';
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
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    dispatch(setPaginationNumberActionCreator(number));
  };

  const numberPagination = Math.ceil(array.length / 10);

  return (
    <>
      {numberPagination > 1 && (
        <Pagination className='flex-row justify-content-center mt-3' size='lg'>
          {activeNumber > 2 && <Pagination.First onClick={() => handleChangePaginationItem(1)}/>}

          {activeNumber > 1 && (
            <Pagination.Item
              key={activeNumber - 1}
              onClick={() => handleChangePaginationItem(activeNumber - 1)}
            >
              {activeNumber - 1}
            </Pagination.Item>
          )}

          <Pagination.Item
            active={!!activeNumber}
            onClick={() => handleChangePaginationItem(activeNumber)}
          >
            {activeNumber}
          </Pagination.Item>,

          {activeNumber < numberPagination && (
            <Pagination.Item
              key={activeNumber + 1}
              onClick={() => handleChangePaginationItem(activeNumber + 1)}
            >
              {activeNumber + 1}
            </Pagination.Item>
          )}

          {activeNumber < numberPagination - 1 && (
            <Pagination.Last onClick={() => handleChangePaginationItem(numberPagination)}/>
          )}
        </Pagination>
      )}
    </>
  );
};

export default PaginationList;
