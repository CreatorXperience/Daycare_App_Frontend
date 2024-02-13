import { createBrowserRouter } from "react-router-dom";
import App from "../App/App";
import NavBarIcon from "../components/NavBarIcons";
import Home from "../pages/Home";

let router = createBrowserRouter([{
    path: "/",
    element: <App />,
    children: [
       { 
        path: "/home",
        element: <Home />,
        children: [
            {
                path: "/home",
                element: <NavBarIcon />
            }
        ]
    }
    ]
}])


export default router