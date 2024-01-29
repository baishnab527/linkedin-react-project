
import {createBrowserRouter} from "react-router-dom";
import PublicRoute from "./public/PublicRoute";
import PrivateRoute from "./private/PrivateRoute";
// create a router;
const router = createBrowserRouter([...PublicRoute, ...PrivateRoute]);
// export default router;
export default router;