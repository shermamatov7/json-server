import React from 'react';
import { Routes, Route } from "react-router-dom"
import Products from './../components/Products';
import Orders from './../components/Orders';
import Admin from './../components/Admin';

const MainRoutes = () => {
    const PUBLIC = [
        { path: "/", element: <Products />, key: 1 },
        { path: "/orders", element: <Orders />, key: 2 }, 
    ];
    const PRIVATE = [{ path: '/admin', element: <Admin />, key: 1 }]
    return (
        <Routes>
            {PUBLIC.map((el) => (
                <Route path={el.path} element={el.element} key={el.key} />
            ))}
            {PRIVATE.map((el) => (
                <Route path={el.path} element={el.element} key={el.key} />
            ))}
        </Routes>
    );
};

export default MainRoutes;
