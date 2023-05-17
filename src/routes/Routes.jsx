import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";

const Routes= createBrowserRouter([
    {
        path:"/",
        element:<HomePage></HomePage>
    }
])



export default Routes;