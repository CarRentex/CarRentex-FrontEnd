import { AxiosResponse } from "axios";
import { CreateCarRequest } from "../models/Car/Request/CreateCarRequest";
import { UpdateCarRequest } from "../models/Car/Request/UpdateCarRequest";
import { CreateCarResponseType } from "../models/Car/Response/CreateCarResponseType";
import { GetAllCarResponse } from "../models/Car/Response/GetAllCarResponse";
import { GetByIdCarResponse } from "../models/Car/Response/GetByIdResponse";
import { UpdateCarResponseType } from "../models/Car/Response/UpdateCarResponseType";
import { BaseService } from "./BaseService/BaseService";
import { axiosInstance } from "../lib/axios";

class CarService extends BaseService<

GetAllCarResponse,
GetByIdCarResponse,
CreateCarRequest,
CreateCarResponseType,
UpdateCarRequest,
UpdateCarResponseType
>{
    constructor() {
        super();
        this.apiUrl = "cars";
    }

    async getCarsByCategory(category: string): Promise<AxiosResponse<GetAllCarResponse[]>> {
        try {
          const response = await axiosInstance.get<GetAllCarResponse[]>(`/cars/category?category=${category}`);
          return response;
        } catch (error) {
          console.error('An error occurred while fetching cars by category.', error);
          throw new Error('An error occurred while fetching cars by category.');
        }
      }
}

export default new CarService();