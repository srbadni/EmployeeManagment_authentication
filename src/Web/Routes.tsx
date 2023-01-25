import React from 'react'
import Login from "./pages/logins/Login";
import {Navigate} from "react-router-dom";

const Routes = () => {

    return [
        {
            path: '/login',
            name: 'صفحه ورود',
            element: <Login/>
        },
        // {path: '/404', name: '404', element: <Page404/>},
        // {path: '/500', name: '500', element: <Page500/>},
        {path: "*", element: <Navigate to={"/login"}/>}
    ];
}

export default Routes
