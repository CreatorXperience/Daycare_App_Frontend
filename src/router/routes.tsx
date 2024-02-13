import { createBrowserRouter } from "react-router-dom";
import App from "../App/App";
import NavBarIcon from "../components/NavBarIcons";
import Home from "../pages/Home";
import Compatible from "../pages/Compatible";

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
        ],
      
    },
    { path: "/compatible",
    element: <Compatible />
}
    ]
}])


export default router