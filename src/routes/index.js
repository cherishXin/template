import { lazy } from 'react';
const Home = lazy(() => import('@/pages/home'));
const Special = lazy(() => import('@/pages/special'));
const Error = lazy(() => import('@/pages/error'));

const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/special',
        component: Special
    },
    {
        path: '*',
        component: Error
    }
];

export default routes;
