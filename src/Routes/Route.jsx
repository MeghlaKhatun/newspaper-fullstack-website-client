import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home/Home";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import ErrorElement from "../Pages/ErrorPage/ErrorElement";
import AddArticles from "../Pages/AddArticles/AddArticles";
import AllArticles from "../Pages/AllArticles/AllArticles";
import Details from "../Pages/AllArticles/Details";
import Dashboard from "../Dashboard/Dashboard/Dashboard";
import AllUser from "../Dashboard/AllUser/AllUser";
import MyProfile from "../Pages/MyProfile/MyProfile";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorElement></ErrorElement>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/registration',
          element:<Registration></Registration>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/myProfile',
          element:<MyProfile></MyProfile>,
          loader:()=>fetch("http://localhost:5000/user")
        },
        {
          path:'/addArticles',
          element:<AddArticles></AddArticles>
        },
        {
          path:'/allArticles',
          element:<AllArticles></AllArticles>,
          loader:()=>fetch(`http://localhost:5000/articles`)
        },
        {
          path:'/allArticles/:id',
          element:<Details></Details>,
          loader:({params})=>fetch(`http://localhost:5000/articles/${params.id}`)
        },
        {
          path:'/dashboard',
          element:<Dashboard></Dashboard>
        },
        {
          path:'/allUser',
          element:<AllUser></AllUser>
        }

      ]
    },
  ]);

  export default router;