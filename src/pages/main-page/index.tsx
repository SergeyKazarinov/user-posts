import { FC } from 'react';
import { getPosts } from 'shared/api/posts';
import { Card } from 'react-bootstrap';
import s from './main-page.module.scss';

interface MainPageProps {}

const MainPage: FC<MainPageProps> = () => {
  const data = getPosts();

  return (
    <section className={s.mainPage}>
      <h1 className='text-h1 text-bold'>Hello World!</h1>
      <Card />
    </section>
  );
};

export default MainPage;
