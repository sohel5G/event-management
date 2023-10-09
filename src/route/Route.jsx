import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Services from "../pages/services/Services";
import Contact from "../pages/contact/Contact";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import ServiceDetails from "../pages/services/ServiceDetails";
import Profile from "../pages/profile/Profile";
import PrivateRouteServiceDetails from "../privateRoute/PrivateRouteServiceDetails";
import PrivateRouteProfile from "../privateRoute/PrivateRouteProfile";
import PrivateRouteLoginRegister from "../privateRoute/PrivateRouteLoginRegister";
import Dashboard from "../pages/dashboard/Dashboard";
import PrivateRouteDashboard from "../privateRoute/PrivateRouteDashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <PrivateRouteLoginRegister> <Login></Login> </PrivateRouteLoginRegister>
            },
            {
                path: '/register',
                element: <PrivateRouteLoginRegister> <Register></Register> </PrivateRouteLoginRegister>
            },
            {
                path: '/service/:id',
                element: <PrivateRouteServiceDetails> <ServiceDetails> </ServiceDetails> </PrivateRouteServiceDetails>
            },
            {
                path: '/profile',
                element: <PrivateRouteProfile> <Profile></Profile> </PrivateRouteProfile>
            },
            {
                path: 'dashboard',
                element: <PrivateRouteDashboard><Dashboard></Dashboard></PrivateRouteDashboard>
            }
        ]
    },
]);

export default router;

