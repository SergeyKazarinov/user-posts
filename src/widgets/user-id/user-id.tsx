import { useAppDispatch, useAppSelector } from 'app/store/app-store';
import { CommentButton } from 'entities/comments';
import { clearErrorPostsActionCreator, getPostsByUserIdActionCreator } from 'entities/post';
import { UserInfo, getUserByUserIdActionCreator } from 'entities/user';
import { BackButton } from 'features/back-button';
import { ToggleCommentButton } from 'features/toggle-comment-button';
import { FC, useEffect } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ErrorMessage, Post, delay } from 'shared';

const UserId: FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.userReducer.user);
  const posts = useAppSelector((store) => store.postsReducer.posts);
  const postErrorMessage = useAppSelector((store) => store.postsReducer.postErrorMessage);
  const comments = useAppSelector((store) => store.commentReducer.comments);
  const userErrorMessage = useAppSelector((store) => store.userReducer.userErrorMessage);
  const param = useParams<{ userId: string }>();

  const handleGetUserById = async () => {
    if (param.userId) {
      await delay(2000);
      dispatch(getUserByUserIdActionCreator(param.userId));
      await delay(2000);
      dispatch(getPostsByUserIdActionCreator(param.userId));
    }
  };
  useEffect(() => {
    handleGetUserById();

    return () => {
      dispatch(clearErrorPostsActionCreator());
    };
  }, []);

  const cards = posts.map((item) => (
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

  if (userErrorMessage) {
    return <ErrorMessage message={userErrorMessage} />;
  }

  return (
    <Container>
      {user ? <UserInfo user={user}/> : <Container className='text-center'><Spinner animation="border" variant="primary"/></Container>}
      <div className="h2 display-4 m-3 fw-bold position-relative ">
        Posts:
      </div>
      {!postErrorMessage
        ? (posts.length
          ? (cards)
          : <Container className='text-center'><Spinner animation="border" variant="primary"/></Container>
        )
        : <ErrorMessage message={postErrorMessage} />

      }

      <BackButton />
    </Container>
  );
};

export default UserId;
