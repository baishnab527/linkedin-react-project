import axios from "axios";
import {
  CreateLinkedinPostFullFilled,
  CreateLinkedinPostPending,
  CreateLinkedinPostRejected,
  DeleteLinkedinPostFullFilled,
  DeleteLinkedinPostPending,
  DeleteLinkedinPostRejected,
  GetLinkedinPostFullFilled,
  GetLinkedinPostPending,
  GetLinkedinPostRejected,
  UpdateLinkedinPostFullFilled,
  UpdateLinkedinPostPending,
  UpdateLinkedinPostRejected,
} from "./actionType";

// Get all linkedinpost data;
export const getAllLinkedinPost = () => async (dispatch) => {
  try {
    dispatch({ type: GetLinkedinPostPending });
    const response = await axios.get("http://localhost:5050/posts");
    dispatch({ type: GetLinkedinPostFullFilled, payload: response.data });
  } catch (error) {
    dispatch({ type: GetLinkedinPostRejected });
  }
};

// create linkedinpost Data ;
export const createLinkedinPost = (item) => async (dispatch) => {
  try {
    dispatch({ type: CreateLinkedinPostPending });
    const response = await axios.post("http://localhost:5050/posts", item);
    dispatch({ type: CreateLinkedinPostFullFilled, payload: response.data });
  } catch {
    dispatch({ type: CreateLinkedinPostRejected });
  }
};

// delete linkedin post ;
export const deleteLinkedinPost = (id) =>async(dispatch) =>{
    try {
        dispatch({type: DeleteLinkedinPostPending});
        const response = await axios.delete(`http://localhost:5050/posts/${id}`);
        dispatch({type: DeleteLinkedinPostFullFilled, payload: id});
    } catch (error) {
        dispatch({type: DeleteLinkedinPostRejected});
    }

}

// update linkedin post ;
export const updateLinkedinPost = (item) => async (dispatch) =>{
    try {
        dispatch({type: UpdateLinkedinPostPending});
        const response = await axios.put(`http://localhost:5050/posts/${item.id}`, item);
        dispatch({type: UpdateLinkedinPostFullFilled, payload: response.data});
    } catch (error){
        dispatch({type: UpdateLinkedinPostRejected});
    }
}
