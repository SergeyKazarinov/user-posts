import { useAppDispatch, useAppSelector } from 'app/store/app-store';
import { CommentButton } from 'entities/comments';
import { getPostsByUserIdActionCreator } from 'entities/post';
import { getUserByUserIdActionCreator } from 'entities/user';
import { ToggleCommentButton } from 'features/toggle-comment-button';
import { FC, useEffect } from 'react';
import {
  Button,
  Card, Container, ListGroup, Spinner,
} from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { Post, delay } from 'shared';

interface UserIdProps {

}

const UserId: FC<UserIdProps> = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.userReducer.user);
  const posts = useAppSelector((store) => store.postsReducer.posts);
  const comments = useAppSelector((store) => store.commentReducer.comments);
  const param = useParams<{ userId: string }>();
  const navigate = useNavigate();

  const handleGetUserById = async () => {
    if (param.userId) {
      dispatch(getUserByUserIdActionCreator(param.userId));
      await delay(2000);
      dispatch(getPostsByUserIdActionCreator(param.userId));
    }
  };
  useEffect(() => {
    handleGetUserById();
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

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <Container>
      <Card className='mt-4'>
        <Card.Img src='../../../public/placeholder.jpg' className='w-25 mx-auto'/>
        <Card.Header className='fs-3'>{user?.name}</Card.Header>
        <ListGroup variant='primary' className='fs-4'>
          <ListGroup.Item><Card.Text as='span' className='fw-bold'>Username: </Card.Text>{user?.username}</ListGroup.Item>
          <ListGroup.Item><Card.Text as='span' className='fw-bold'>Email: </Card.Text>{user?.email}</ListGroup.Item>
          <ListGroup.Item><Card.Text as='span' className='fw-bold'>Website: </Card.Text>{user?.website}</ListGroup.Item>
          <ListGroup.Item><Card.Text as='span' className='fw-bold'>Phone: </Card.Text>{user?.phone}</ListGroup.Item>
          <ListGroup.Item><Card.Text as='span' className='fw-bold'>Company: </Card.Text>{user?.company.name}</ListGroup.Item>
          <ListGroup.Item><Card.Text as='span' className='fw-bold'>Address: </Card.Text>
            {`${user?.address.zipcode}, ${user?.address.city}, ${user?.address.street}, ${user?.address.suite}`}
          </ListGroup.Item>
        </ListGroup>
      </Card>
      <div className="h2 display-4 m-3 fw-bold position-relative ">
        Posts:
      </div>
      {posts.length ? cards : <Container className='text-center'><Spinner animation="border" variant="primary"/></Container> }

      <Button className='position-fixed end-0 bottom-0 m-5' size='lg' onClick={handleClick}>Back</Button>
    </Container>
  );
};

export default UserId;
