import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./features/Products";
import PageNotFound from "./pages/PageNotFound";
import About from "./pages/About";

const router = createBrowserRouter([
    {path:'/',element:<App/>,
        children:[
            {path:'',element:<Home/>},
            {path:'about',element:<About/>},
            {path:'login',element:<Login/>},
            {path:'register',element:<Register/>},
            {path:'products',element:<Products/>}
        ]
    },
    {path:'*',element:<PageNotFound/>}
])

export default router