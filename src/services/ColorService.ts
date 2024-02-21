import { CreateColorRequest, CreateColorResponseType, GetAllColorResponse, GetByIdColorResponse, UpdateColorRequest, UpdateColorResponseType } from "../models/Color/Color";
import { BaseService } from "./BaseService/BaseService";

class ColorService extends BaseService<

   GetAllColorResponse,
   GetByIdColorResponse,
   CreateColorRequest,
   CreateColorResponseType,
   UpdateColorRequest,
   UpdateColorResponseType
>{
    constructor() {
        super();
        this.apiUrl = "colors";
    }
}

export default new ColorService();