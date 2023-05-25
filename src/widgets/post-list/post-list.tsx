import { useAppDispatch, useAppSelector } from 'app/store/app-store';
import { Post, getPostsActionCreator } from 'entities';
import { CommentButton } from 'entities/comments';
import { ToggleCommentButton } from 'features/toggle-comment-button';

import { FC, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { delay } from 'shared/lib';

interface PostListProps {

}

const PostList: FC<PostListProps> = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((store) => store.postsReducer.posts);
  const comments = useAppSelector((store) => store.commentReducer.comments);

  const handelGetPosts = async () => {
    await delay(1000);
    dispatch(getPostsActionCreator());
  };

  useEffect(() => {
    handelGetPosts();
  }, []);

  const cards = posts.map((item) => (
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
      {posts.length ? cards : <Spinner animation="border" variant="primary" className='position-absolute top-50 start-50 '/> }
    </>
  );
};

export default PostList;
