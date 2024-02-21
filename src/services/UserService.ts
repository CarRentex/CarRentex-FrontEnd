import { UpdatePassword } from './../models/User/Request/UpdatePassword';
import { ResetPassword } from './../models/User/Request/ResetPassword';
import { AxiosResponse } from "axios";
import { GetAllUserResponse } from "../models/User/Response/GetAllUserResponse";
import { GetByIdUserResponse } from "../models/User/Response/GetByIdUserResponse";
import { axios } from "../lib/axios";
import { CreateUserResponseType } from '../models/User/Response/CreateUserResponse';
import { UpdateUserResponseType } from '../models/User/Response/UpdateUserResponseType';

class UserService{
    public apiUrl = "users";

getAll(): Promise<AxiosResponse<GetAllUserResponse, any>> {
    return axios.get<GetAllUserResponse>(this.apiUrl + "/getAll");
}

getById(id: number): Promise<AxiosResponse<GetByIdUserResponse, any>> {
    return axios.get<GetByIdUserResponse>(this.apiUrl +`/getById?id=${id}`); // düzelt
}

resetPassword(request: ResetPassword): Promise<AxiosResponse<CreateUserResponseType, any>> {
    return axios.put<CreateUserResponseType>(this.apiUrl + "/resetPassword", request);
}

UpdatePassword(
    request: UpdatePassword,
): Promise<AxiosResponse<UpdateUserResponseType, any>> {
    return axios.put<UpdateUserResponseType>(this.apiUrl + "/updatePassword", request);
}

delete(id: number) {
    return axios.delete(this.apiUrl + "/" + id);
}
}

export default new UserService();