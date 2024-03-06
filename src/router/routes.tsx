import {createBrowserRouter } from "react-router-dom";
import App from "../App/App";
import NavBarIcon from "../components/NavBarIcons";
import Home from "../pages/Home";
import Compatible from "../pages/Compatible";
import ROUTE from "../constants/routes";
import Login from "../pages/Auth/Login/Login";
import Signup from "../pages/Auth/Signup/Signup";
import Verification from "../pages/Verification";
import Details from "../pages/Details";
import UserInputData from "../pages/UserInputData";
import Search from "../pages/Search";
import Result from "../pages/Result";
import ChildCareProfile from "../pages/ChildcareProfile";



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
},{
    path: ROUTE.verify,
    element: <Verification />
},
{
    path: ROUTE.details,
    element: <Details />
},
{
    path:  ROUTE.userProfile,
    element: <UserInputData />
},{
    path: ROUTE.search,
    element: <Search /> 
},
{
    path: ROUTE.result,
    element: <Result />,
    children: [
        {
            path: ROUTE.result,
            element: <NavBarIcon />
        }
    ]
},{
    path: ROUTE.profile,
    element: <ChildCareProfile />
}
    ]
}])


export default router