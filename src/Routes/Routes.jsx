import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginLayout from "../Layouts/LoginLayout";
import Main from "../Layouts/Main";
import NewsDetails from "../Layouts/NewsDetails";
import Category from "../Pages/Home/Category/Category";
import Login from "../Pages/Login/Login";
import News from "../Pages/News/News";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

 
const router = new createBrowserRouter([
    {
        path: "/",
        element: <LoginLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to='/category/0'></Navigate>
            },
            {
                path : "login",
                element: <Login />
            },
            {
                path : "register",
                element: <Register />
            }
        ]

    },
    {
        path: 'category',
        element : <Main />,
        children : [
           
            {
                path : ':id',
                element: <Category />,
                loader: ({params})=> fetch(`https://the-dragon-news-server-flame.vercel.app/categories/${params.id}`)
            },
        ]
    },
    {
        path : 'news',
        element :<NewsDetails></NewsDetails>,
        children : [
            {
                path: ':id',
                element:  <PrivateRoute><News /></PrivateRoute>,
                loader:({params})=>fetch(`https://the-dragon-news-server-flame.vercel.app/news/${params.id}`)
            }
        ]
    }
])

export default router;