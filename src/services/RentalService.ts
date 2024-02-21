import { CreateRentalRequest } from "../models/Rental/Request/CreateRentalRequest";
import { UpdateRentalRequest } from "../models/Rental/Request/UpdateRentalRequest";
import { CreateRentalResponseType } from "../models/Rental/Response/CreateRentalResponseType";
import { GetAllRentalResponse } from "../models/Rental/Response/GetAllRentalResponse";
import { GetByIdRentalResponse } from "../models/Rental/Response/GetByIdRentalResponse";
import { UpdateRentalResponseType } from "../models/Rental/Response/UpdateRentalResponseType";
import { BaseService } from "./BaseService/BaseService";

class RentalService extends BaseService<

GetAllRentalResponse,
GetByIdRentalResponse,
CreateRentalRequest,
CreateRentalResponseType,
UpdateRentalRequest,
UpdateRentalResponseType
>{
    constructor() {
        super();
        this.apiUrl = "rentals";
    }
}

export default new RentalService();