import {
    createBrowserRouter,
} from "react-router";
import Root from "../root/Root";
import Home from "../pages/Home";
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
                element:<Home/>
            }
        ]
    },
]);
  