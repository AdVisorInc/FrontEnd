import React, {ComponentType, lazy, ReactElement, Suspense} from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';
import PrivateRoutes from './Components/Atoms/PrivateRoutes';
import SidebarLayout from './Layouts/SidebarLayout';
import LoginPage from './Components/Pages/LoginPage';
import RegisterPage from './Components/Pages/RegisterPage';
import HomePage from './Components/Pages/HomePage';
import SuspenseLoader from "./Components/Atoms/SuspenseLoader";
import BaseLayout from "./Layouts/BaseLayout";

// Status pages are still dynamically imported for later use
const Status404 = lazy(() => import('./Components/Pages/Status/Status404'));
const Status500 = lazy(() => import('./Components/Pages/Status/Status500'));
const StatusComingSoon = lazy(() => import('./Components/Pages/Status/ComingSoon'));
const StatusMaintenance = lazy(() => import('./Components/Pages/Status/Maintenance'));
interface LoaderProps {
    Component: ComponentType<any>;
    [propName: string]: any; // This allows any other props to be passed through.
}
// Dynamic import helper with Suspense
const Loader = ({ Component }: { Component: React.LazyExoticComponent<React.ComponentType<any>> }) => (
    <Suspense fallback={<SuspenseLoader />}>
        <Component />
    </Suspense>
);
const DashboardPage = lazy(() => import('./Components/Pages/DashboardPage'));
const UserProfile = lazy(() => import('./Components/Pages/Users/Profile'));
const UserSettings = lazy(() => import('./Components/Pages/Users/Settings'));

const routes: RouteObject[] = [
    {
        path: '/',
        element: <BaseLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/login',
                element: <LoginPage />,
            },
            {
                path: '/register',
                element: <RegisterPage />,
            },
            {
                path: 'status',
                children: [
                    { path: '404', element: <Loader Component={Status404} /> },
                    { path: '500', element: <Loader Component={Status500} /> },
                    { path: 'maintenance', element: <Loader Component={StatusMaintenance} /> },
                    { path: 'coming-soon', element: <Loader Component={StatusComingSoon} /> },
                ],
            },
        ],
    },
    {
        path: 'dashboard',
        element: (
            <PrivateRoutes>
                <SidebarLayout />
            </PrivateRoutes>
        ),
        children: [
            { path: 'overview', element: <Loader Component={DashboardPage} /> },
        ],
    },
    {
        path: 'user',
        element: (
            <PrivateRoutes>
                <SidebarLayout />
            </PrivateRoutes>
        ),
        children: [

            { path: 'profile', element: <Loader Component={UserProfile} /> },
            { path: 'settings', element: <Loader Component={UserSettings} /> },
        ],
    },
    // Correctly placed catch-all route at the root level to handle unmatched paths
    { path: '*', element: <Loader Component={Status404} /> },
];
export default routes;
