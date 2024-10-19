import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./components/Admin/Dashboard";
import { ProtectedAdmin } from "./components/hiddenlinks";
import AdminLayout from "./components/Admin/AdminLayout";
import AddCar from "./components/Admin/AddCar";
import ViewCars from "./components/Admin/ViewCars";
import AddSliderImage from "./components/Admin/AddSliderImage";
import ViewSliderImage from "./components/Admin/ViewSliderImage";
import Cars from "./components/Cars";
import CarDetails from "./components/CarDetails";

const router  = createBrowserRouter([
    {path:'/',element:<App/>,
        children:[
            {path:'',element:<Home/>},
            {path:'/login',element:<Login/>},
            {path:'/register',element:<Register/>},
            {path:'/cars',element:<Cars/>},
            {path:'/car/details/:id',element:<CarDetails/>},
        ]
    },
    {path:'/admin',element:<AdminLayout/>,
        children:[
            {path:'',element:<Dashboard/>},
            {path:'addcar',element:<AddCar/>},
            {path:'viewcar',element:<ViewCars/>},
            {path:'editcar/:id',element:<AddCar/>},
            {path:'addslider',element:<AddSliderImage/>},
            {path:'viewslider',element:<ViewSliderImage/>},
            {path:'editslider/:id',element:<AddSliderImage/>},
        ]
    },
    {path:"*",element:<PageNotFound/>}
])
export default router