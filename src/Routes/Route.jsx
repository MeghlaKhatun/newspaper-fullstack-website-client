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
import AdminAllArticle from "../Pages/AddminAllArticle/AdminAllArticle";
import PrivateRoute from "./PrivateRoute";
import AddPublisher from "../Pages/AddPublisher/AddPublisher";
import PremiumArticle from "../Pages/PremiumArticles/PremiumArticle";
import MyArticles from "../Pages/MyArticles/MyArticles";
import UpdateArticle from "../Pages/UpdateArticle/UpdateArticle";

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
          element:<PrivateRoute><MyProfile></MyProfile></PrivateRoute>,
          loader:()=>fetch("http://localhost:5000/user")
        },
        {
          path:'/addArticles',
          element:<PrivateRoute><AddArticles></AddArticles></PrivateRoute>
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
        },
        {
          path:'/addPublisher',
          element:<AddPublisher></AddPublisher>
        },
        {
          path:'/adminAllArticles',
          element:<AdminAllArticle></AdminAllArticle>
        },
        {
          path:'/premiumArticles',
          element:<PrivateRoute><PremiumArticle></PremiumArticle></PrivateRoute>,
          loader:()=>fetch("http://localhost:5000/articles")
        },
        {
          path:'/myArticles',
          element:<PrivateRoute><MyArticles></MyArticles></PrivateRoute>,
        },
        {
          path:'/myArticles/:id',
          element:<UpdateArticle></UpdateArticle>,
          loader:({params})=>fetch(`http://localhost:5000/articles/${params.id}`)
        }

      ]
    },
  ]);

  export default router;