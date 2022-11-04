import JestComponent from 'pages/JestComponentPage';
import MainPage from 'pages/MainPage';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  const data = [
    {
      body: 'qweqe',
      id: 2,
      title: 'qweqweqwe',
      userId: 4,
    },
    {
      body: 'qweqwe',
      id: 3,
      title: 'qweqweqwe',
      userId: 5,
    },
  ];

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
          element={<MainPage posts={data} />}
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
