import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./components/Products";
import Dashboard from "./components/Admin/Dashboard";
import { ProtectedAdmin } from "./components/hiddenlinks";
import AdminLayout from "./components/Admin/AdminLayout";
import AddCar from "./components/Admin/AddCar";
import ViewCars from "./components/Admin/ViewCars";

const router  = createBrowserRouter([
    {path:'/',element:<App/>,
        children:[
            {path:'',element:<Home/>},
            {path:'/login',element:<Login/>},
            {path:'/register',element:<Register/>},
            {path:'/products',element:<Products/>},
        ]
    },
    {path:'/admin',element:<ProtectedAdmin><AdminLayout/></ProtectedAdmin>,
        children:[
            {path:'',element:<Dashboard/>},
            {path:'addcar',element:<AddCar/>},
            {path:'viewcar',element:<ViewCars/>}
        ]
    },
    {path:"*",element:<PageNotFound/>}
])
export default router