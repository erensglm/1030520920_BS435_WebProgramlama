import React from "react";
import ReactDOM from "react-dom";

import {Game} from "./game";
import {createBrowserRouter, createHashRouter, RouterProvider} from "react-router-dom";
import {Home} from "./home";

const router = createHashRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/Game",
        element: <Game/>,
    },
]);


const App = () => {

    return (
        <RouterProvider router={router}/>

    )
}

ReactDOM.render(<App/>, document.getElementById("root"));