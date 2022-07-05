import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - menuList
const HomeDefault = Loadable(lazy(() => import('pages/home')));
const TypeFailureDefault = Loadable(lazy(() => import('pages/type-failure')));
const BatchOperationDefault = Loadable(lazy(() => import('pages/batch-operation')));
const UserLogDefault = Loadable(lazy(() => import('pages/user-log')));

// render - dashboard
// const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
// const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
// const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
// const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
// const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
// const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <HomeDefault />
        },
        // {
        //     path: 'color',
        //     element: <Color />
        // },
        // {
        //     path: 'dashboard',
        //     children: [
        //         {
        //             path: 'default',
        //             element: <DashboardDefault />
        //         }
        //     ]
        // },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'home',
                    element: <HomeDefault />
                },
                {
                    path: 'type-failure',
                    element: <TypeFailureDefault />
                },
                {
                    path: 'batch-operation',
                    element: <BatchOperationDefault />
                },
                {
                    path: 'user-log',
                    element: <UserLogDefault />
                }
            ]
        }
        // {
        //     path: 'sample-page',
        //     element: <SamplePage />
        // },
        // {
        //     path: 'shadow',
        //     element: <Shadow />
        // },
        // {
        //     path: 'typography',
        //     element: <Typography />
        // },
        // {
        //     path: 'icons/ant',
        //     element: <AntIcons />
        // }
    ]
};

export default MainRoutes;
