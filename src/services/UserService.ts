import { axiosInstance } from './../lib/axios';
import { UpdatePassword } from './../models/User/Request/UpdatePassword';
import { ResetPassword } from './../models/User/Request/ResetPassword';
import { AxiosResponse } from "axios";
import { GetAllUserResponse } from "../models/User/Response/GetAllUserResponse";
import { GetByIdUserResponse } from "../models/User/Response/GetByIdUserResponse";
import { CreateUserResponseType } from '../models/User/Response/CreateUserResponse';
import { UpdateUserResponseType } from '../models/User/Response/UpdateUserResponseType';

class UserService {
    apiUrl = "users";

    constructor() {
        this.getById = this.getById.bind(this);
    }

    getAll(): Promise<AxiosResponse<GetAllUserResponse, any>> {
        return axiosInstance.get<GetAllUserResponse>(this.apiUrl + "/getAll");
    }

    getById(id: number): Promise<AxiosResponse<GetByIdUserResponse, any>> {
        return axiosInstance.get<GetByIdUserResponse>(this.apiUrl + `/getById?id=${id}`);
    }
    
    resetPassword(request: ResetPassword): Promise<AxiosResponse<CreateUserResponseType, any>> {
        return axiosInstance.put<CreateUserResponseType>(this.apiUrl + "/resetPassword", request);
    }

    UpdatePassword(
        request: UpdatePassword,
    ): Promise<AxiosResponse<UpdateUserResponseType, any>> {
        return axiosInstance.put<UpdateUserResponseType>(this.apiUrl + "/updatePassword", request);
    }

    delete(id: number) {
        return axiosInstance.delete(this.apiUrl + "/" + id);
    }
    getTotalUsers(): Promise<AxiosResponse<any, any>> {
        return axiosInstance.get<any>(this.apiUrl + `/totalUsers`);
    }
    
}

export default new UserService();