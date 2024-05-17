import Apply from '@pages/apply/Apply';
import Home from '@pages/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
  const routerData = [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/apply',
      element: <Apply />,
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {routerData.map((data, i) => (
          <Route key={`route-${i}`} path={data.path} element={data.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
