import { CreateCarRequest } from "../models/Car/Request/CreateCarRequest";
import { UpdateCarRequest } from "../models/Car/Request/UpdateCarRequest";
import { CreateCarResponseType } from "../models/Car/Response/CreateCarResponseType";
import { GetAllCarResponse } from "../models/Car/Response/GetAllCarResponse";
import { GetByIdCarResponse } from "../models/Car/Response/GetByIdResponse";
import { UpdateCarResponseType } from "../models/Car/Response/UpdateCarResponseType";
import { BaseService } from "./BaseService/BaseService";

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
}

export default new CarService();