import Layout from "../../component/layout/Layout";
import Admin from "../../page/admin/Admin";

// create a Private router ;
const PrivateRoute = [
    {
        element: < Layout/>,
        children: [
            {
                path: "/admin",
                element: < Admin/>
            }
        ]
    }
];


// export default PrivateRoute;
export default PrivateRoute;