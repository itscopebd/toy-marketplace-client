import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Main from "../layOut/Main";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>
            }
            , {
                path: "/login",
                element: <Login></Login>
            }, {
                path: "/registration",
                element: <Registration></Registration>
            }
        ]

    }
])



export default Routes;