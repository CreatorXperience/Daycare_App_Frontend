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
import Search from "../pages/Search";
import Result from "../pages/Result";
import ChildCareProfile from "../pages/ChildcareProfile";
import Chats from "../pages/Chats";
import Message from "../pages/Messages";
import ViewAll from "../pages/ViewAll";
import SplashScreen from "../pages/SplashScreen";
import Position from "../pages/Position";
import UserProfile from "../pages/UserProfile";
import EditUserProfile from "../pages/EditUserprofile";
import ProfileWrapper from "../components/ProfileWrapper";
import ProfileModal from "../components/ProfileModal";
import Blank from "../components/Blank";



let router = createBrowserRouter([{
    path: ROUTE.root,
    element: <App />,
    children: [
       { 
        path: ROUTE.home,
        element: <ProfileWrapper><Home /></ProfileWrapper>,
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
},
{
    path: ROUTE.chats,
    element:  <ProfileWrapper><Chats /></ProfileWrapper>,
},{
    path: ROUTE.messages,
    element: <Message />
},{
    path: ROUTE.viewall,
    element: <ViewAll />,
    children: [
        {
            path: ROUTE.viewall,
            element: <NavBarIcon />
        }
    ]
},{
    path: ROUTE.root,
    element: <SplashScreen />
},{
    path: ROUTE.position,
    element: <Position />
},
{
    path: ROUTE.userProfile,
    element: <ProfileWrapper><UserProfile /></ProfileWrapper>,

},{
    path: ROUTE.editUserProfile,
    element: <EditUserProfile />
},{
    path: ROUTE.hasProfile,
    element: <Blank />
}
    ]
}])


export default router
