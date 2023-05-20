import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'app/app';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'app/store/app-store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
);
