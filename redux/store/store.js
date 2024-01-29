// create a store by use redux store ;
import { applyMiddleware, createStore } from "redux";
import rootReducer from "../rootReducer/rootReducer.js";
import {thunk} from "redux-thunk";

// distracture middle were;


// create store;
const store = createStore( rootReducer,
 (applyMiddleware(thunk))

);

// export defualt store;
export default store;
