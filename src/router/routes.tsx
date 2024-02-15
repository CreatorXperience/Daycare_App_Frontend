import { createBrowserRouter } from "react-router-dom";
import App from "../App/App";
import NavBarIcon from "../components/NavBarIcons";
import Home from "../pages/Home";
import Compatible from "../pages/Compatible";
import ROUTE from "../constants/routes";
import Login from "../pages/Auth/Login/Login";
import Signup from "../pages/Auth/Signup/Signup";

let router = createBrowserRouter([{
    path: ROUTE.root,
    element: <App />,
    children: [
       { 
        path: ROUTE.home,
        element: <Home />,
        children: [
            {
                path: ROUTE.home,
                element: <NavBarIcon />
            }
        ],
      
    },
    { path: ROUTE.compatible,
    element: <Compatible />
},
{
    path: ROUTE.signup,
    element: <Signup />
},
{
    path: ROUTE.login,
    element: <Login />
}
    ]
}])


export default router