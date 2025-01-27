import axios from "axios";
import DataService from "./dataService";
import { baseUrl } from "../../shared/baseUrl"; 
import CreateHttpService from "../../helpers/HttpService";

 
 
const dataService = DataService();
 
//  Login user 
 const login = async (value: any) => { 
   const { data } = await axios.post(baseUrl + '/v1/auth/login', value) 
   if (data) {  
    dataService?.setToken(data.accessToken)  
    localStorage.setItem('press_mine', JSON.stringify(data?.user));     
  }
  return data
}
   
// Sign-Up
const signUp = async (inputs: any) => {
  const HttpService = CreateHttpService();
  const { data } = await HttpService.post("/v1/auth/register", inputs);
  return data;
};

   // logout  
const logout = async () => { 
 
 
};

const authService = {  
  login,  
  signUp,
  logout
}

export default authService
