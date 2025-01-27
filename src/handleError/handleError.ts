import { toast } from "react-toastify";
import { SerializedError } from "@reduxjs/toolkit";
import { customId } from "../components/Options";
import { fireAlert } from "../components/Alert";

export const handleError = (error: any) => {

 
    
 
  // Extract error message from response 
	const message = Array.isArray(error?.response?.data)
			? error.response.data.join(', ')
			: error?.response?.data?.message
      ? error.response.data.message.map((err: { message: string }) => err).join(', ') : [];
  
  
 
  // Handle unauthorized error
  if (error?.response?.status === 401 && error?.response?.statusText === "Unauthorized") {
    fireAlert("Session Expired", "Please log in again", "error", "/");
  } else if(error?.response?.status === undefined || error?.response?.statusText === null){

  }else {
    // Display error message using toast
    toast.error(message, {  toastId: customId });
  }
};


export const handleMessageError = (error: SerializedError, thunkAPI: any) => {
		// @ts-ignore
	const errorMessage = error?.response?.data?.message ||
			// @ts-ignore
		(error?.response?.data?.errors?.map((error: { message: any }) => error.message) || []).join(', ') ||
    'An error occurred.'; 
 
  toast.error(errorMessage, {  toastId: customId });
	return thunkAPI.rejectWithValue(errorMessage);
};
