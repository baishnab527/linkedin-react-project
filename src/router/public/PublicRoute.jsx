import Layout from "../../component/layout/Layout";
import Home from "../../page/home/Home";
import SignUp from "../../page/sign_up/SignUp";

// create a Private router ;
const PublicRoute = [
    {
        element: < Layout/>,
        children: [
            {
                path: "/",
                element: < Home/>
            },

            {
                path: "/signup",
                element: <SignUp/>
            }
        ]
    }
];


// export default PrivateRoute;
export default PublicRoute;