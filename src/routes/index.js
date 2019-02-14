import { lazy } from 'react';
const Home = lazy(() => import('@/pages/home'));
const Error = lazy(() => import('@/pages/error'));

const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '*',
        component: Error
    }
];

export default routes;
