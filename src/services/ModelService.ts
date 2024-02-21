import { CreateModelRequest } from "../models/Model/Request/CreateModelRequest";
import { UpdateModelRequest } from "../models/Model/Request/UpdateModelRequest";
import { CreateModelResponseType } from "../models/Model/Response/CreateModelResponseType";
import { GetAllModelResponse } from "../models/Model/Response/GetAllModelResponse";
import { GetByIdModelResponse } from "../models/Model/Response/GetByIdModelResponse";
import { UpdateModelResponseType } from "../models/Model/Response/UpdateModelResponseType";
import { BaseService } from "./BaseService/BaseService";

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
}

export default new ModelService();