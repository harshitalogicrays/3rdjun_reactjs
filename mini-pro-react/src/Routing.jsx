import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./features/Products";
import PageNotFound from "./pages/PageNotFound";
import About from "./pages/About";
import Contextdemo from "./features/contextdemo";
import Cart from "./features/Cart";
import ThemeContext from "./features/ThemeContext";
import { Protected } from "./features/hiddenlinks";

const router = createBrowserRouter([
    {path:'/',element:<ThemeContext><Contextdemo><App/></Contextdemo></ThemeContext>,
        children:[
            {path:'',element:<Home/>},
            {path:'about',element:<About/>},
            {path:'login',element:<Login/>},
            {path:'register',element:<Register/>},
            {path:'products',element:<Protected><Products/></Protected>},
            {path:'cart',element:<Cart/>}
        ]
    },
    {path:'*',element:<PageNotFound/>}
])

export default router