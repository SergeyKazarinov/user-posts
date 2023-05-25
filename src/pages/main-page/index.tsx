import { FC } from 'react';
import { PostList } from 'widgets';

interface MainPageProps {}

const MainPage: FC<MainPageProps> = () => (
  <section>
    <PostList />
  </section>
);

export default MainPage;
