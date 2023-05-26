import { useAppDispatch, useAppSelector } from 'app/store/app-store';
import {
  Post,
  getPostsActionCreator,
  setPaginationPostsActionCreator,
} from 'entities';
import { CommentButton } from 'entities/comments';
import { PaginationList } from 'features/pagination-list';
import { SearchPosts } from 'features/search-posts';
import { ToggleCommentButton } from 'features/toggle-comment-button';
import { FC, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { delay } from 'shared';

const PostList: FC = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((store) => store.postsReducer.posts);
  const searchedPosts = useAppSelector((store) => store.postsReducer.searchedPosts);
  const paginationNumber = useAppSelector((store) => store.postsReducer.paginationNumber);
  const paginationPost = useAppSelector((store) => store.postsReducer.paginationPost);
  const comments = useAppSelector((store) => store.commentReducer.comments);

  const handelGetPosts = async () => {
    await delay(1000);
    dispatch(getPostsActionCreator());
  };

  useEffect(() => {
    handelGetPosts();
  }, []);

  useEffect(() => {
    if (posts.length) {
      dispatch(setPaginationPostsActionCreator());
    }
  }, [searchedPosts, paginationNumber]);

  const cards = paginationPost.map((item) => (
    <Post
      key={item.id}
      item={item}
      commentButton={
        <CommentButton
          postId={item.id}
          comments={comments}
          commentButton={ <ToggleCommentButton eventKey='0'>Комментарии</ToggleCommentButton>}/>
      }
    />
  ));

  return (
    <>
      <SearchPosts />
      {posts.length ? cards : <Spinner animation="border" variant="primary" className='position-absolute top-50 start-50 '/> }
      <PaginationList array={searchedPosts} activeNumber={paginationNumber} />
    </>
  );
};

export default PostList;
