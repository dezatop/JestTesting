import JestComponent from 'pages/JestComponentPage';
import MainPage from 'pages/MainPage';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Link
        data-testid="link-main"
        to="/"
      >
        Main
      </Link>
      <Link
        data-testid="link-jest"
        to="/jest"
      >
        Jest
      </Link>
      <Routes>
        <Route
          path="/"
          element={<MainPage />}
        />
        <Route
          path="/jest"
          element={<JestComponent />}
        />
      </Routes>
    </div>
  );
}

export default App;
