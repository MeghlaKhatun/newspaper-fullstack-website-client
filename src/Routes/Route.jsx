import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home/Home";
import Registration from "../Pages/Registration/Registration";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/registration',
          element:<Registration></Registration>
        }
      ]
    },
  ]);

  export default router;