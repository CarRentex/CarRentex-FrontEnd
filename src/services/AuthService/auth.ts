import { CreateLogin } from '../../models/Auth/CreateLogin';
import {axios} from "../../lib/axios"
import { CreateRegister } from '../../models/Auth/CreateRegister';

 export const login = async (credentials: CreateLogin): Promise<any> => {
    const response = await axios.post("auths/signIn",credentials);
    return response.data
  };


        // düzenlenecek kullanma şuanlık sakın 
 export const register = async (credentials: CreateRegister): Promise<any> => {
    const response = await axios.post("auths/signUp",credentials);
    return response.data
  };


  export const brandGetAll = async () => {

    const response = await axios.get("brands/getAll");
    console.log(response.data);
    return response.data;
  }