import { FC, useEffect, useState } from 'react';
import { getPosts } from 'shared/api/posts';
import { IPost } from 'types/post';
import { Post } from 'entities';
import s from './main-page.module.scss';

interface MainPageProps {}

const MainPage: FC<MainPageProps> = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const handelGetPosts = async () => {
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
    <section className={s.mainPage}>
      {cards}
    </section>
  );
};

export default MainPage;
