import Loader from 'UI';
import { FC, Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from 'widgets';

const MainPage = lazy(() => import('pages/main-page/main-page'));
const PageNotFound = lazy(() => import('pages/page-note-found/page-note-found'));

const Routing: FC = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </Suspense>
);

export default Routing;
