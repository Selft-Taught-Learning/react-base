import { Suspense } from 'react';
import {
  BrowserRouter,
  NavLink,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import logo from '../logo.svg';
import { routes } from './routes';

export const Navigation = () => {
  const lazyRoutes = routes['01-lazyload'];

  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className='main-layout'>
          <nav>
            <img src={logo} alt='Logo app' />
            <ul>
              {lazyRoutes.map(({ name, to }) => (
                <li key={name}>
                  <NavLink
                    to={to}
                    className={({ isActive }) => (isActive ? 'nav-active' : '')}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {lazyRoutes.map(({ name, path, Component }) => (
              <Route key={name} path={path} element={<Component />} />
            ))}

            <Route
              path='/*'
              element={<Navigate to={lazyRoutes[0].to} replace />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
