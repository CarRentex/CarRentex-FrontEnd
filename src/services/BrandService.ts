import { Update } from "@reduxjs/toolkit";
import { CreateBrandRequest } from "../models/Brand/Request/createBrandRequest";
import { GetAllBrandResponse } from "../models/Brand/Response/GetAllBrandResponse";
import { GetByIdBrandResponse } from "../models/Brand/Response/GetByIdResponse";
import { BaseService } from "./BaseService/BaseService";
import { UpdateBrandRequest } from "../models/Brand/Request/updateBrandRequest";
import { CreateBrandResponseType } from "../models/Brand/Response/CreateBrandResponseType";
import { UpdateBrandResponseType } from "../models/Brand/Response/UpdateBrandResponseType";

class BrandService extends BaseService<
    GetAllBrandResponse,
    GetByIdBrandResponse,
    CreateBrandRequest,
    CreateBrandResponseType,
    UpdateBrandRequest,
    UpdateBrandResponseType
>{
    constructor() {
        super();
        this.apiUrl = "brands";
    }
}

export default new BrandService();