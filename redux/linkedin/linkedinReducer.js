// create a linkedin Reducer ;
import {
  GetLinkedinPostFullFilled,
  GetLinkedinPostPending,
  GetLinkedinPostRejected,
  CreateLinkedinPostPending,
  CreateLinkedinPostFullFilled,
  CreateLinkedinPostRejected,
  DeleteLinkedinPostPending,
  DeleteLinkedinPostFullFilled,
  DeleteLinkedinPostRejected,
  UpdateLinkedinPostPending,
  UpdateLinkedinPostFullFilled,
  UpdateLinkedinPostRejected,
} from "./actionType.js";
import initialState from "./initialState.js";
const linkedinReducer = (state = initialState, action) => {
  switch (action.type) {
    // get student data ;
    case GetLinkedinPostPending: {
      return {
        ...state,
        loading: true,
      };
    }

    case GetLinkedinPostFullFilled: {
      return {
        ...state,
        loading: false,
        linkedinPosts: action.payload,
        message: "Post Data get success fully",
      };
    }

    case GetLinkedinPostRejected: {
      return {
        ...state,
        loading: false,
        error: "Posts data get Faileld",
      };
    }

    case CreateLinkedinPostPending: {
      return {
        ...state,
        loading: true,
      };
    }

    case CreateLinkedinPostFullFilled: {
      return {
        ...state,
        loading: false,
        linkedinPosts: [...state.linkedinPosts, action.payload],
        message: "Linkedin Post created Success fully",
      };
    }

    case CreateLinkedinPostRejected: {
      return{
        ...state,
        loading:false,
        error: "Linkedin Posts create Failed"
      }
    }
    
   
    case DeleteLinkedinPostPending:{
      return{
        ...state,
        loading: true,
      }
    }

    case DeleteLinkedinPostFullFilled:{
      return{
        ...state,
        loading: false,
        linkedinPosts: state.linkedinPosts.filter((item) => item.id !== action.payload),
        message: "Linkedin Data delete Successfull",

      }
    }

    case DeleteLinkedinPostRejected:{
      return{
        ...state,
        loading: false,
        error: "Linkedin Data delete rejected",
      }
    }

    case UpdateLinkedinPostPending:{
      return{
        ...state,
        loading: true,
      }
    }

    case UpdateLinkedinPostFullFilled:{
      
     

      return{
        ...state,
        loading: false,
        linkedinPosts: state.linkedinPosts.map((item)=>{
          if(item.id == action.payload.id){
            return action.payload;
          }else{
            item
          }
        }),
        message: "LinkedinPost update success fully",
      }

    }

    case UpdateLinkedinPostRejected:{
      return{
        ...state,
        loading: false,
        error: "Linkedin Data Update rejected",
      }
    }


    // delete student data ;
    default:
      return state;
  }
};

// export default linkedinReducer ;
export default linkedinReducer;
