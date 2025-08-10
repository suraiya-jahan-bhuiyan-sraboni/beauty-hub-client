import {
    createBrowserRouter,
} from "react-router";
import Root from "../root/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ManageService from "../pages/ManageService";
import BookedService from "../pages/BookedService";
import AddService from "../pages/AddService";
import ServiceToDo from "../pages/ServiceToDo";
import ServiceDetails from "../pages/ServiceDetails";
import Error404 from "../pages/Error404";
import AllService from "../pages/AllService";
import PrivateRoute from "./PrivateRoute";
import EditService from "../pages/EditService";
import About from "../pages/About";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        hydrateFallbackElement: <div className="min-h-screen flex justify-center items-center flex-col">
            Wait...
            <progress className="progress w-56"></progress>
        </div>,
        children: [
            {
                index: true,
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/manage-service',
                element: <PrivateRoute><ManageService /></PrivateRoute>
            },
            {
                path: '/booked-service',
                element: <PrivateRoute><BookedService /></PrivateRoute>
            },
            {
                path: '/add-service',
                element: <PrivateRoute><AddService /></PrivateRoute>
            },
            {
                path: '/edit-service/:id',
                element: <PrivateRoute><EditService /></PrivateRoute>
            },
            {
                path: '/service-to-do',
                element: <PrivateRoute><ServiceToDo /></PrivateRoute>
            },
            {
                path: '/service-details/:id',
                element: <PrivateRoute><ServiceDetails /></PrivateRoute>
            },
            {
                path: '/all-service',
                element: <AllService />
            },
            {
                path:'/contact',
                element:<About/>
            }
        ]
    },
    {
        path: "/*",
        Component: Error404,
    }
]);
