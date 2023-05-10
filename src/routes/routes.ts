import { LazyExoticComponent, lazy } from 'react';
import { NotLazy } from '../01-lazyload';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

interface Routes {
  [key: string]: Route[];
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'));

export const routes: Routes = {
  '01-lazyload': [
    {
      to: '/lazyload',
      path: '/lazyload/*',
      Component: LazyLayout,
      name: 'LazyLayout - Dashboard',
    },
    {
      to: '/not-lazy',
      path: 'not-lazy',
      Component: NotLazy,
      name: 'Not Lazy',
    },
  ],
};
