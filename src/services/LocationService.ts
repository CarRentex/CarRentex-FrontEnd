import { CreateLocationRequest } from "../models/Location/Request/CreateLocationRequest";
import { UpdateLocationRequest } from "../models/Location/Request/UpdateLocationRequest";
import { CreateLocationResponseType } from "../models/Location/Response/CreateLocationResponseType";
import { GetAllLocationResponse } from "../models/Location/Response/GetAllLocationResponse";
import { GetByIdLocationResponse } from "../models/Location/Response/GetByIdLocationResponse";
import { UpdateLocationResponseType } from "../models/Location/Response/UpdateLocationResponseType";
import { BaseService } from "./BaseService/BaseService";

class LocationService extends BaseService<
	GetAllLocationResponse,
	GetByIdLocationResponse,
	CreateLocationRequest,
	CreateLocationResponseType,
	UpdateLocationRequest,
	UpdateLocationResponseType
>{
    constructor() {
        super();
        this.apiUrl = "locations";
    }
}
export default new LocationService();