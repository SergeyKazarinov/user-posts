import { FC, Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from 'shared/ui';
import Layout from './layouts/baseLayout';

const MainPage = lazy(() => import('pages/main-page'));
const PageNotFound = lazy(() => import('pages/page-note-found'));

const AppRouter: FC = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </Suspense>
);

export default AppRouter;
