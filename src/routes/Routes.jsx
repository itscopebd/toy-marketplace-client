import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Main from "../layOut/Main";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";
import AllToysPage from "../pages/AllToysPage/AllToysPage";
import AddAToy from "../pages/AddAToy/AddAToy";
import BlogPage from "../pages/BlogPage/BlogPage";
import UpdatePage from "../pages/UpdatePage/UpdatePage";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import PrivetRouter from "./PrivetRouter";
import MyToyPage from "../pages/MyToyPage/MyToyPage";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,


        children: [
            {
                path: "/",
                element: <HomePage></HomePage>,
                loader: () => fetch("https://b7a11-toy-marketplace-server-side-itscopebd.vercel.app/toys")
            }
            , {
                path: "/login",
                element: <Login></Login>
            }, {
                path: "/registration",
                element: <Registration></Registration>
            },
            {
                path: "/alltoys",
                element: <AllToysPage></AllToysPage>,
                loader: () => fetch("https://b7a11-toy-marketplace-server-side-itscopebd.vercel.app/toys")
            }
            , {
                path: "/addtoy",
                element: <AddAToy></AddAToy>
            },
            {
                path: "/blog",
                element: <BlogPage></BlogPage>
            },
            {
                path: "/update/:id",
                element: <UpdatePage></UpdatePage>,
                loader: ({ params }) => fetch(`https://b7a11-toy-marketplace-server-side-itscopebd.vercel.app/toy/${params.id}`)
            }, {
                path: "/details/:id",
                element: <PrivetRouter><DetailsPage></DetailsPage></PrivetRouter>,
                loader: ({ params }) => fetch(`https://b7a11-toy-marketplace-server-side-itscopebd.vercel.app/toy/${params.id}`)
            },{
                path:"/mytoy",
                element:<PrivetRouter><MyToyPage></MyToyPage></PrivetRouter>
            }

        ]

    }
])



export default Routes;