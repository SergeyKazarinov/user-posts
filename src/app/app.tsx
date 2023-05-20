import { FC } from 'react';
import { ThemeProvider } from 'react-bootstrap';
import AppRouter from './app-router';

const App: FC = () => (
  <ThemeProvider
    breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    minBreakpoint="xxs"
  >
    <AppRouter />
  </ThemeProvider>
);

export default App;
