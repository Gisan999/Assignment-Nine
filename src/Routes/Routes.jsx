import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import Service from "../Components/Service/Service";



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
                element: <Service></Service>,
                loader: ()=> fetch('/fakeData.json')
            }
        ])
    }
])

export default routes;