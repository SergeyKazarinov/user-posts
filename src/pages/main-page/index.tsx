import {
  FC, Suspense, useEffect, useState,
} from 'react';
import { getPosts } from 'shared/api/posts';
import { IPost } from 'types/post';
import { Post } from 'entities';
import { Loader } from 'shared';
import delay from 'shared/lib';
import s from './main-page.module.scss';

interface MainPageProps {}

const MainPage: FC<MainPageProps> = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const handelGetPosts = async () => {
    delay(1000);
    const data = await getPosts();
    setPosts(data);
  };

  useEffect(() => {
    handelGetPosts();
  }, []);

  const cards = posts.map((item) => (
    <Post key={item.id} item={item}/>
  ));
  console.log(cards);

  return (
    <section className={s.mainPage}>
      <Suspense fallback={<Loader />}>
        {cards}
      </Suspense>
    </section>
  );
};

export default MainPage;
