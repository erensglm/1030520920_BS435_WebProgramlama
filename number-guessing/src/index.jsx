import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import GameOne from "./GameOne";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import GameTwo from "./GameTwo";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "GameOne",
        element: <GameOne/>,
    },
    {
        path: "GameTwo",
        element: <GameTwo/>,
    },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

