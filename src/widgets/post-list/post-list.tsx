import { Post } from 'entities';
import { FC, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { getPosts } from 'shared/api/posts';
import delay from 'shared/lib';
import { IPost } from 'types/post';

interface PostListProps {

}

const PostList: FC<PostListProps> = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const handelGetPosts = async () => {
    await delay(1000);
    const data = await getPosts();
    setPosts(data);
  };

  useEffect(() => {
    handelGetPosts();
  }, []);

  const cards = posts.map((item) => (
    <Post key={item.id} item={item}/>
  ));

  return (
    <>
      {posts.length ? cards : <Spinner animation="border" variant="primary" className='position-absolute top-50 start-50 '/> }
    </>
  );
};

export default PostList;
