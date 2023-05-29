import { useAppDispatch, useAppSelector } from 'app/store/app-store';
import {
  getPostsActionCreator,
  setPaginationPostsActionCreator,
  setPostsActionCreator,
  sortPostActionCreator,
} from 'entities/post';
import { CommentButton } from 'entities/comments';
import { PaginationList } from 'features/pagination-list';
import { SearchPosts } from 'features/search-posts';
import { SortPosts } from 'features/sort-posts';
import { ToggleCommentButton } from 'features/toggle-comment-button';
import { FC, useEffect } from 'react';
import {
  Col, Container, Row, Spinner,
} from 'react-bootstrap';
import { ErrorMessage, Post, delay } from 'shared';

const PostList: FC = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((store) => store.postsReducer.posts);
  const searchedPosts = useAppSelector((store) => store.postsReducer.searchedPosts);
  const sortedPosts = useAppSelector((store) => store.postsReducer.sortedPosts);
  const sortValue = useAppSelector((store) => store.postsReducer.sortValue);
  const paginationNumber = useAppSelector((store) => store.postsReducer.paginationNumber);
  const paginationPost = useAppSelector((store) => store.postsReducer.paginationPost);
  const comments = useAppSelector((store) => store.commentReducer.comments);
  const errorMessage = useAppSelector((store) => store.errorReducer.errorMessage);

  const handelGetPosts = async () => {
    await delay(1000);
    dispatch(getPostsActionCreator());
  };

  useEffect(() => {
    handelGetPosts();

    return () => {
      dispatch(setPostsActionCreator([]));
    };
  }, []);

  useEffect(() => {
    if (posts.length) {
      dispatch(setPaginationPostsActionCreator(sortedPosts, paginationNumber));
    }
  }, [searchedPosts, paginationNumber, sortedPosts, sortValue, posts, dispatch]);

  useEffect(() => {
    dispatch(sortPostActionCreator(sortValue));
  }, [dispatch, sortValue, searchedPosts]);

  const cards = paginationPost.map((item) => (
    <Post
      key={item.id}
      item={item}
      commentButton={
        <CommentButton
          postId={item.id}
          comments={comments}
          commentButton={ <ToggleCommentButton eventKey='0'>Comments</ToggleCommentButton>}/>
      }
    />
  ));

  return (
    <>
      <Container>
        <Row className=' mx-auto mt-3 flex-row align-items-center'>
          <Col>
            <SearchPosts />
          </Col>
          <Col md='auto' className='p-2  '>
            <SortPosts />
          </Col>
        </Row>
      </Container>
      {!errorMessage
        ? (posts.length
          ? cards
          : <Container className='text-center mt-5'><Spinner animation="border" variant="primary"/></Container>
        )
        : <ErrorMessage message={errorMessage} />
      }

      <PaginationList array={searchedPosts} activeNumber={paginationNumber} />
    </>
  );
};

export default PostList;
