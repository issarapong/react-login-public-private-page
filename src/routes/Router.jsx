import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { publicRoutes } from './publicRoutes';

function Routes() {

    let appRoutes =  publicRoutes
    const router = createBrowserRouter(appRoutes);

    return <RouterProvider router={router} />;
}

export default Routes;