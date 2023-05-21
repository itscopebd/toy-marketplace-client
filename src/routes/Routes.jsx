import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Main from "../layOut/Main";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";
import AllToysPage from "../pages/AllToysPage/AllToysPage";
import AddAToy from "../pages/AddAToy/AddAToy";
import BlogPage from "../pages/BlogPage/BlogPage";
import UpdatePage from "../pages/UpdatePage/UpdatePage";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
    
        
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>,
                loader:()=> fetch("http://localhost:5000/toys")   
            }
            , {
                path: "/login",
                element: <Login></Login>
            }, {
                path: "/registration",
                element: <Registration></Registration>
            },
            {
                path:"/alltoys",
                element:<AllToysPage></AllToysPage>,
                loader:()=>fetch("http://localhost:5000/toys")
            }
            ,{
                path:"/addtoy",
                element:<AddAToy></AddAToy>
            },
            {
                path:"/blog",
                element:<BlogPage></BlogPage>
            },
            {
                path:"/update/:id",
            element:<UpdatePage></UpdatePage>,
            loader:({params})=>fetch(`http://localhost:5000/toy/${params.id}`)
        }
           
        ]

    }
])



export default Routes;