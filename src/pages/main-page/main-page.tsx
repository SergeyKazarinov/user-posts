import { FC } from 'react';
import s from './main-page.module.scss';

interface MainPageProps {}

const MainPage: FC<MainPageProps> = () => (
  <section className={s.mainPage}>
    <h1 className='text-h1 text-bold'>Hello World!</h1>
  </section>
);

export default MainPage;
