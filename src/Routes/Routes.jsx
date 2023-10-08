import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import Service from "../Components/Service/Service";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import PrivateRoute from "./PrivateRoute";



const routes = createBrowserRouter([
    {
        path: "/",
        element:<Root></Root>,
        children: ([
            {
                path: "/",
                element:<Home></Home>,
                loader: ()=> fetch('/fakeData.json')
            },
            {
                path: "/fakeData/:id",
                element: <PrivateRoute><Service></Service></PrivateRoute>,
                loader: ()=> fetch('/fakeData.json')
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ])
    }
])

export default routes;