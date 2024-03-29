import { axiosInstance} from "../../lib/axios";
import { CreateLogin } from "../../models/Auth/CreateLogin";
import { CreateRegister } from "../../models/Auth/CreateRegister";


export const login = async (credentials: CreateLogin): Promise<any> => {
   return axiosInstance.post("auths/signIn", credentials);
};

export const register = async (credentials: CreateRegister): Promise<any> => {
  const response = await axiosInstance.post("auths/signUp",credentials);
  return response.data;
};

