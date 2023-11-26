import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home/Home";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import ErrorElement from "../Pages/ErrorPage/ErrorElement";
import AddArticles from "../Pages/AddArticles/AddArticles";

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
          path:'/addArticles',
          element:<AddArticles></AddArticles>
        }
      ]
    },
  ]);

  export default router;