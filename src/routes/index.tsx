import { Routes as ReactRouterDomRoutes, Route } from 'react-router-dom';

import { Home } from 'pages';

import { PrivateRoute, PublicRoute } from './Routes';

interface Routes {
  path: string;
  isPrivate: boolean;
  element: JSX.Element;
}

const routes: Routes[] = [
  {
    path: '/',
    isPrivate: false,
    element: <Home />,
  },
];

export function Routes() {
  return (
    <ReactRouterDomRoutes>
      {routes.map(({ path, isPrivate, element }) =>
        isPrivate ? (
          <Route
            key={path}
            path={path}
            element={<PrivateRoute>{element}</PrivateRoute>}
          />
        ) : (
          <Route
            key={path}
            path={path}
            element={<PublicRoute>{element}</PublicRoute>}
          />
        ),
      )}
    </ReactRouterDomRoutes>
  );
}
