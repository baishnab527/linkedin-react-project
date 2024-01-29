import { combineReducers } from "redux";
import linkedinReducer from "../linkedin/linkedinReducer";

// create a root reducer here;
const rootReducer = combineReducers(
    {
        linkedin: linkedinReducer,
    }
);


// export default rootReducer;
export default rootReducer;