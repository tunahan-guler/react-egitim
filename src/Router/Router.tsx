import React, { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MyLayout from '../MyLayout/MyLayout'
import CreateProduct from '../screens/CreateProduct'
import Home from '../screens/Home/Home';
// import Product from '../screens/Product';

const Product = lazy(() => import("../screens/Product"));

const myRoute = createBrowserRouter([
    {
        path: "/",
        element: <MyLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/product",
                element: <Product />,
            },
            {
                path: "/createproduct",
                element: <CreateProduct />,
            }
        ]
    }
]);

const Router = () => {
    return <RouterProvider router={myRoute} />
}

export default Router