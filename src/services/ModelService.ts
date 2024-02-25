import { AxiosResponse } from "axios";
import { axiosInstance } from "../lib/axios";
import { CreateModelRequest } from "../models/Model/Request/CreateModelRequest";
import { UpdateModelRequest } from "../models/Model/Request/UpdateModelRequest";
import { CreateModelResponseType } from "../models/Model/Response/CreateModelResponseType";
import { GetAllModelResponse } from "../models/Model/Response/GetAllModelResponse";
import { GetByIdModelResponse } from "../models/Model/Response/GetByIdModelResponse";
import { UpdateModelResponseType } from "../models/Model/Response/UpdateModelResponseType";
import { BaseService } from "./BaseService/BaseService";
import { GetModelByBrandId } from "../models/Model/Response/GetModelByBrandId";

class ModelService extends BaseService<

GetAllModelResponse,
GetByIdModelResponse,
CreateModelRequest,
CreateModelResponseType,
UpdateModelRequest,
UpdateModelResponseType
>{
    constructor() {
        super();
        this.apiUrl = "models";
    }

    async getModelByBrandId(id: number): Promise<AxiosResponse<GetModelByBrandId[]>> {
        try {
          const response = await axiosInstance.get<GetModelByBrandId[]>(this.apiUrl +`/getByBrandId?id=${id}`);
          return response;
        } catch (error) {
          console.error('An error occurred while fetching cars by model.', error);
          throw new Error('An error occurred while fetching cars by model.');
        }
      }
}

export default new ModelService();