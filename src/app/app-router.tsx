import { FC, Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader } from 'shared';
import Layout from './layouts/baseLayout';

const MainPage = lazy(() => import('pages/main-page'));
const PageNotFound = lazy(() => import('pages/page-note-found'));
const AboutMePage = lazy(() => import('pages/about-me-page'));
const UserId = lazy(() => import('widgets/user-id/user-id'));

const AppRouter: FC = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/about-me" element={<AboutMePage />} />
      </Route>
      <Route path='/users/:userId' element={<UserId />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  </Suspense>
);

export default AppRouter;
