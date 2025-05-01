import { createBrowserRouter } from "react-router";
import Home from "../Layouts/Home/Home";

const router = createBrowserRouter (
    [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path: '/auth',
            element: <div>Authintic layout</div>,
        },
        {
            path: '/news',
            element: <div>News Layout</div>,
        },
        {
            path: '/*',
            element: <div>Error404</div>,
        }
    ]
);

export default router