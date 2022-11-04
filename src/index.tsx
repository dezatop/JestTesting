import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import './styles/app.scss';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Theme from './components/App/GlobalStyle/Theme';
import reportWebVitals from './reportWebVitals';
import createStore from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const persist = persistStore(createStore());

root.render(
  <React.StrictMode>
    <Provider store={createStore()}>
      <PersistGate
        loading={null}
        persistor={persist}
      >
        <BrowserRouter>
          <Theme>
            <App />
          </Theme>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
